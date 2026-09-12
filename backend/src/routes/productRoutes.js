const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  getProducts,
  getProductBySlug,
  getAllProductsAdmin,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* =========================================================
   IMAGE UPLOAD CONFIGURATION
   ========================================================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(__dirname, "../../uploads")
    );
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    const baseName = path
      .basename(file.originalname, extension)
      .replace(/[^a-zA-Z0-9-_]/g, "-")
      .toLowerCase();

    cb(
      null,
      `${Date.now()}-${baseName}${extension}`
    );
  },
});


/* =========================================================
   IMAGE FILE FILTER
   ========================================================= */

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(
      new Error("Only image files are allowed."),
      false
    );
  }
};


/* =========================================================
   MULTER CONFIGURATION
   ========================================================= */

const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});


/* =========================================================
   PUBLIC ROUTES
   ========================================================= */

/* GET ALL ACTIVE PRODUCTS */

router.get(
  "/",
  getProducts
);


/* GET PRODUCT BY SLUG */

router.get(
  "/:slug",
  getProductBySlug
);


/* =========================================================
   ADMIN ROUTES
   ========================================================= */

/* GET ALL PRODUCTS
   Includes active + hidden products */

router.get(
  "/admin/all",
  authMiddleware,
  getAllProductsAdmin
);


/* ADD PRODUCT */

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createProduct
);


/* UPDATE PRODUCT */

router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateProduct
);


/* DELETE PRODUCT */

router.delete(
  "/:id",
  authMiddleware,
  deleteProduct
);


/* =========================================================
   ERROR HANDLER
   ========================================================= */

router.use((error, req, res, next) => {
  console.error(
    "Product route error:",
    error
  );

  if (
    error instanceof multer.MulterError
  ) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message:
          "Image must be smaller than 5 MB.",
      });
    }

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  next();
});


/* =========================================================
   EXPORT ROUTER
   ========================================================= */

module.exports = router;