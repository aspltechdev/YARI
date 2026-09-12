const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  getGallery,
  getGalleryById,
  getAllGalleryAdmin,
  createGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/galleryController");

const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();


/* =========================================================
   MULTER STORAGE
   ========================================================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(
        __dirname,
        "../../uploads"
      )
    );
  },

  filename: (req, file, cb) => {
    const extension =
      path.extname(
        file.originalname
      );

    const baseName =
      path
        .basename(
          file.originalname,
          extension
        )
        .replace(
          /[^a-zA-Z0-9-_]/g,
          "-"
        )
        .toLowerCase();

    cb(
      null,
      `${Date.now()}-${baseName}${extension}`
    );
  },
});


/* =========================================================
   IMAGE FILTER
   ========================================================= */

const fileFilter = (
  req,
  file,
  cb
) => {
  if (
    file.mimetype.startsWith(
      "image/"
    )
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only image files are allowed."
      ),
      false
    );
  }
};


/* =========================================================
   MULTER
   ========================================================= */

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize:
      5 * 1024 * 1024,
  },
});


/* =========================================================
   PUBLIC
   ========================================================= */

router.get(
  "/",
  getGallery
);


/* =========================================================
   ADMIN
   ========================================================= */

/*
   IMPORTANT:
   /admin/all MUST come before /:id
*/

router.get(
  "/admin/all",
  authMiddleware,
  getAllGalleryAdmin
);


router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createGallery
);


router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateGallery
);


router.delete(
  "/:id",
  authMiddleware,
  deleteGallery
);


/* =========================================================
   PUBLIC GALLERY BY ID
   ========================================================= */

router.get(
  "/:id",
  getGalleryById
);


/* =========================================================
   ERROR HANDLER
   ========================================================= */

router.use(
  (error, req, res, next) => {
    console.error(
      "Gallery route error:",
      error
    );


    if (
      error instanceof
      multer.MulterError
    ) {
      if (
        error.code ===
        "LIMIT_FILE_SIZE"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Image must be smaller than 5 MB.",
        });
      }


      return res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }


    if (error) {
      return res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }


    next();
  }
);


module.exports = router;