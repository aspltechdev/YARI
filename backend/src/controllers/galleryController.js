const pool = require("../config/database");
const fs = require("fs");
const path = require("path");


/* =========================================================
   HELPER — DELETE LOCAL IMAGE
   ========================================================= */

const deleteImageFile = (imagePath) => {
  if (!imagePath) {
    return;
  }

  // Only delete images stored by our backend.
  if (!imagePath.startsWith("/uploads/")) {
    return;
  }

  const fileName = path.basename(imagePath);

  const fullPath = path.join(
    __dirname,
    "../../uploads",
    fileName
  );

  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);

      console.log(
        `Deleted gallery image: ${fileName}`
      );
    }
  } catch (error) {
    console.error(
      "Error deleting gallery image file:",
      error
    );
  }
};


/* =========================================================
   PUBLIC — GET ACTIVE GALLERY
   ========================================================= */

const getGallery = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM gallery
       WHERE is_active = true
       ORDER BY sort_order ASC, id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(
      "Error fetching gallery:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};


/* =========================================================
   PUBLIC — GET GALLERY BY ID
   ========================================================= */

const getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT *
       FROM gallery
       WHERE id = $1
       AND is_active = true`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Gallery image not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Error fetching gallery image:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery image",
    });
  }
};


/* =========================================================
   ADMIN — GET ALL GALLERY
   ========================================================= */

const getAllGalleryAdmin = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM gallery
       ORDER BY sort_order ASC, id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(
      "Error fetching admin gallery:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
};


/* =========================================================
   ADMIN — CREATE GALLERY IMAGE
   ========================================================= */

const createGallery = async (req, res) => {
  try {
    const {
      title = "",
      description = "",
      sort_order = 0,
      is_active = true,
    } = req.body;


    /* -----------------------------------------------------
       IMAGE REQUIRED
       ----------------------------------------------------- */

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Gallery image is required.",
      });
    }


    /* -----------------------------------------------------
       IMAGE PATH
       ----------------------------------------------------- */

    const imagePath =
      `/uploads/${req.file.filename}`;


    /* -----------------------------------------------------
       INSERT
       ----------------------------------------------------- */

    const result = await pool.query(
      `INSERT INTO gallery
       (
         title,
         description,
         image,
         sort_order,
         is_active
       )
       VALUES
       (
         $1,
         $2,
         $3,
         $4,
         $5
       )
       RETURNING *`,
      [
        title.trim(),
        description.trim(),
        imagePath,
        Number(sort_order) || 0,
        is_active !== "false" &&
          is_active !== false,
      ]
    );


    res.status(201).json({
      success: true,
      message:
        "Gallery image created successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Error creating gallery image:",
      error
    );


    /* -----------------------------------------------------
       DELETE UPLOADED FILE IF DATABASE INSERT FAILS
       ----------------------------------------------------- */

    if (req.file) {
      deleteImageFile(
        `/uploads/${req.file.filename}`
      );
    }


    res.status(500).json({
      success: false,
      message:
        "Failed to create gallery image.",
    });
  }
};


/* =========================================================
   ADMIN — UPDATE GALLERY IMAGE
   ========================================================= */

const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title = "",
      description = "",
      sort_order = 0,
      is_active = true,
    } = req.body;


    /* -----------------------------------------------------
       GET CURRENT RECORD
       ----------------------------------------------------- */

    const existingResult = await pool.query(
      `SELECT *
       FROM gallery
       WHERE id = $1`,
      [id]
    );


    if (existingResult.rows.length === 0) {
      if (req.file) {
        deleteImageFile(
          `/uploads/${req.file.filename}`
        );
      }

      return res.status(404).json({
        success: false,
        message:
          "Gallery image not found.",
      });
    }


    const existing =
      existingResult.rows[0];


    /* -----------------------------------------------------
       KEEP OLD IMAGE IF NO NEW IMAGE
       ----------------------------------------------------- */

    let imagePath =
      existing.image;


    if (req.file) {
      imagePath =
        `/uploads/${req.file.filename}`;
    }


    /* -----------------------------------------------------
       UPDATE DATABASE
       ----------------------------------------------------- */

    const result = await pool.query(
      `UPDATE gallery
       SET
         title = $1,
         description = $2,
         image = $3,
         sort_order = $4,
         is_active = $5,
         updated_at = CURRENT_TIMESTAMP
       WHERE id = $6
       RETURNING *`,
      [
        title.trim(),
        description.trim(),
        imagePath,
        Number(sort_order) || 0,
        is_active !== "false" &&
          is_active !== false,
        id,
      ]
    );


    /* -----------------------------------------------------
       DELETE OLD IMAGE AFTER SUCCESSFUL UPDATE
       ----------------------------------------------------- */

    if (
      req.file &&
      existing.image &&
      existing.image !== imagePath
    ) {
      deleteImageFile(
        existing.image
      );
    }


    res.status(200).json({
      success: true,
      message:
        "Gallery image updated successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Error updating gallery image:",
      error
    );


    /* -----------------------------------------------------
       DELETE NEW FILE IF UPDATE FAILS
       ----------------------------------------------------- */

    if (req.file) {
      deleteImageFile(
        `/uploads/${req.file.filename}`
      );
    }


    res.status(500).json({
      success: false,
      message:
        "Failed to update gallery image.",
    });
  }
};


/* =========================================================
   ADMIN — DELETE GALLERY IMAGE
   ========================================================= */

const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;


    /* -----------------------------------------------------
       GET IMAGE BEFORE DELETE
       ----------------------------------------------------- */

    const existingResult = await pool.query(
      `SELECT *
       FROM gallery
       WHERE id = $1`,
      [id]
    );


    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Gallery image not found.",
      });
    }


    const existing =
      existingResult.rows[0];


    /* -----------------------------------------------------
       DELETE DATABASE RECORD
       ----------------------------------------------------- */

    await pool.query(
      `DELETE FROM gallery
       WHERE id = $1`,
      [id]
    );


    /* -----------------------------------------------------
       DELETE LOCAL IMAGE
       ----------------------------------------------------- */

    deleteImageFile(
      existing.image
    );


    res.status(200).json({
      success: true,
      message:
        "Gallery image deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Error deleting gallery image:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to delete gallery image.",
    });
  }
};


/* =========================================================
   EXPORTS
   ========================================================= */

module.exports = {
  getGallery,
  getGalleryById,
  getAllGalleryAdmin,
  createGallery,
  updateGallery,
  deleteGallery,
};