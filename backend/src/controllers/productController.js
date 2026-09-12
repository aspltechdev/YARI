const pool = require("../config/database");
const fs = require("fs");
const path = require("path");

/* =====================================================
   GET ALL ACTIVE PRODUCTS
   ===================================================== */

const getProducts = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM products
       WHERE is_active = true
       ORDER BY sort_order ASC, id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};


/* =====================================================
   GET SINGLE PRODUCT BY SLUG
   ===================================================== */

const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      `SELECT *
       FROM products
       WHERE slug = $1
       AND is_active = true
       LIMIT 1`,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error fetching product:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};


/* =====================================================
   GET ALL PRODUCTS FOR ADMIN
   Includes active + hidden products
   ===================================================== */

const getAllProductsAdmin = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM products
       ORDER BY sort_order ASC, id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(
      "Error fetching admin products:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};


/* =====================================================
   DELETE OLD IMAGE FILE
   ===================================================== */

const deleteImageFile = (imagePath) => {
  try {
    if (!imagePath) {
      return;
    }

    // Only delete locally uploaded images.
    // Never attempt to delete external URLs.
    if (
      imagePath.startsWith("http://") ||
      imagePath.startsWith("https://")
    ) {
      return;
    }

    let relativePath = imagePath;

    if (relativePath.startsWith("/")) {
      relativePath = relativePath.substring(1);
    }

    const filePath = path.join(
      __dirname,
      "../../",
      relativePath
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(
        "Deleted old product image:",
        filePath
      );
    }
  } catch (error) {
    console.error(
      "Error deleting product image:",
      error
    );
  }
};


/* =====================================================
   ADD PRODUCT
   ===================================================== */

const createProduct = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      features,
      sort_order,
      is_active,
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product title is required",
      });
    }

    if (!slug || !slug.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product slug is required",
      });
    }

    if (!description || !description.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product description is required",
      });
    }

    /* ---------------------------------------------
       FEATURES
       --------------------------------------------- */

    let parsedFeatures = [];

    if (features) {
      try {
        parsedFeatures =
          typeof features === "string"
            ? JSON.parse(features)
            : features;

        if (!Array.isArray(parsedFeatures)) {
          parsedFeatures = [];
        }
      } catch (error) {
        parsedFeatures = [];
      }
    }

    /* ---------------------------------------------
       IMAGE
       --------------------------------------------- */

    let imagePath = null;

    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    /* ---------------------------------------------
       INSERT
       --------------------------------------------- */

    const result = await pool.query(
      `INSERT INTO products
       (
         title,
         slug,
         description,
         image,
         features,
         sort_order,
         is_active
       )
       VALUES
       ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        title.trim(),
        slug.trim(),
        description.trim(),
        imagePath,
        JSON.stringify(parsedFeatures),
        Number(sort_order) || 0,
        is_active !== "false" && is_active !== false,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Error creating product:",
      error
    );

    if (req.file) {
      deleteImageFile(
        `/uploads/${req.file.filename}`
      );
    }

    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message:
          "A product with this slug already exists.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};


/* =====================================================
   UPDATE PRODUCT
   ===================================================== */

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    /* ---------------------------------------------
       GET EXISTING PRODUCT
       --------------------------------------------- */

    const existingResult = await pool.query(
      `SELECT *
       FROM products
       WHERE id = $1
       LIMIT 1`,
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
        message: "Product not found",
      });
    }

    const existingProduct =
      existingResult.rows[0];

    const {
      title,
      slug,
      description,
      features,
      sort_order,
      is_active,
    } = req.body;

    if (!title || !title.trim()) {
      if (req.file) {
        deleteImageFile(
          `/uploads/${req.file.filename}`
        );
      }

      return res.status(400).json({
        success: false,
        message: "Product title is required",
      });
    }

    if (!slug || !slug.trim()) {
      if (req.file) {
        deleteImageFile(
          `/uploads/${req.file.filename}`
        );
      }

      return res.status(400).json({
        success: false,
        message: "Product slug is required",
      });
    }

    if (!description || !description.trim()) {
      if (req.file) {
        deleteImageFile(
          `/uploads/${req.file.filename}`
        );
      }

      return res.status(400).json({
        success: false,
        message:
          "Product description is required",
      });
    }

    /* ---------------------------------------------
       FEATURES
       --------------------------------------------- */

    let parsedFeatures =
      existingProduct.features || [];

    if (features !== undefined) {
      try {
        parsedFeatures =
          typeof features === "string"
            ? JSON.parse(features)
            : features;

        if (!Array.isArray(parsedFeatures)) {
          parsedFeatures = [];
        }
      } catch (error) {
        parsedFeatures = [];
      }
    }

    /* ---------------------------------------------
       IMAGE
       --------------------------------------------- */

    let imagePath =
      existingProduct.image || null;

    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    /* ---------------------------------------------
       UPDATE
       --------------------------------------------- */

    const result = await pool.query(
  `UPDATE products
   SET
     title = $1,
     slug = $2,
     description = $3,
     image = $4,
     features = $5,
     sort_order = $6,
     is_active = $7
   WHERE id = $8
   RETURNING *`,
  [
    title.trim(),
    slug.trim(),
    description.trim(),
    imagePath,
    JSON.stringify(parsedFeatures),
    Number(sort_order) || 0,
    is_active !== "false" &&
      is_active !== false,
    id,
  ]
);

    /* ---------------------------------------------
       DELETE OLD IMAGE AFTER SUCCESSFUL UPDATE
       --------------------------------------------- */

    if (
      req.file &&
      existingProduct.image &&
      existingProduct.image !== imagePath
    ) {
      deleteImageFile(
        existingProduct.image
      );
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Error updating product:",
      error
    );

    if (req.file) {
      deleteImageFile(
        `/uploads/${req.file.filename}`
      );
    }

    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message:
          "A product with this slug already exists.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};


/* =====================================================
   DELETE PRODUCT
   ===================================================== */

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    /* ---------------------------------------------
       GET PRODUCT FIRST
       --------------------------------------------- */

    const existingResult = await pool.query(
      `SELECT *
       FROM products
       WHERE id = $1
       LIMIT 1`,
      [id]
    );

    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const product =
      existingResult.rows[0];

    /* ---------------------------------------------
       DELETE DATABASE RECORD
       --------------------------------------------- */

    await pool.query(
      `DELETE FROM products
       WHERE id = $1`,
      [id]
    );

    /* ---------------------------------------------
       DELETE LOCAL IMAGE
       --------------------------------------------- */

    if (product.image) {
      deleteImageFile(product.image);
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(
      "Error deleting product:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};


/* =====================================================
   EXPORTS
   ===================================================== */

module.exports = {
  getProducts,
  getProductBySlug,
  getAllProductsAdmin,
  createProduct,
  updateProduct,
  deleteProduct,
};