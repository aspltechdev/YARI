const pool = require("../config/database");
const fs = require("fs");
const path = require("path");

const getIndustries = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM industries
       ORDER BY sort_order ASC, id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching industries:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch industries",
    });
  }
};

const createIndustry = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      features,
      sort_order,
      is_active,
    } = req.body;

    if (!title || !slug) {
      return res.status(400).json({
        success: false,
        message: "Title and slug are required.",
      });
    }

    let parsedFeatures = [];

    if (features) {
      try {
        parsedFeatures = JSON.parse(features);
      } catch {
        parsedFeatures = [];
      }
    }

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const result = await pool.query(
      `INSERT INTO industries
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
        description || "",
        image,
        JSON.stringify(parsedFeatures),
        Number(sort_order) || 0,
        is_active !== "false",
      ]
    );

    res.status(201).json({
      success: true,
      message: "Industry created successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error creating industry:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create industry",
    });
  }
};

const updateIndustry = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      slug,
      description,
      features,
      sort_order,
      is_active,
    } = req.body;

    if (!title || !slug) {
      return res.status(400).json({
        success: false,
        message: "Title and slug are required.",
      });
    }

    const existingResult = await pool.query(
      `SELECT *
       FROM industries
       WHERE id = $1`,
      [id]
    );

    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Industry not found.",
      });
    }

    const existingIndustry = existingResult.rows[0];

    let parsedFeatures = [];

    if (features) {
      try {
        parsedFeatures = JSON.parse(features);
      } catch {
        parsedFeatures = [];
      }
    }

    let image = existingIndustry.image;

    if (req.file) {
      image = `/uploads/${req.file.filename}`;

      deleteOldImage(existingIndustry.image);
    }

    const result = await pool.query(
      `UPDATE industries
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
        description || "",
        image,
        JSON.stringify(parsedFeatures),
        Number(sort_order) || 0,
        is_active !== "false",
        id,
      ]
    );

    res.status(200).json({
      success: true,
      message: "Industry updated successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating industry:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update industry",
    });
  }
};

const deleteIndustry = async (req, res) => {
  try {
    const { id } = req.params;

    const existingResult = await pool.query(
      `SELECT *
       FROM industries
       WHERE id = $1`,
      [id]
    );

    if (existingResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Industry not found.",
      });
    }

    const industry = existingResult.rows[0];

    await pool.query(
      `DELETE FROM industries
       WHERE id = $1`,
      [id]
    );

    deleteOldImage(industry.image);

    res.status(200).json({
      success: true,
      message: "Industry deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting industry:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete industry",
    });
  }
};

const deleteOldImage = (imagePath) => {
  if (!imagePath || !imagePath.startsWith("/uploads/")) {
    return;
  }

  const filename = path.basename(imagePath);
  const fullPath = path.join(
    __dirname,
    "../../uploads",
    filename
  );

  if (fs.existsSync(fullPath)) {
    fs.unlink(fullPath, (error) => {
      if (error) {
        console.error(
          "Error deleting old image:",
          error
        );
      }
    });
  }
};

module.exports = {
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
};