const pool = require("../config/database");

/* =========================================================
   GET ALL ABOUT CONTENT
   ========================================================= */

const getAboutContent = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM about_content
       ORDER BY id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching about content:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch about content",
    });
  }
};


/* =========================================================
   GET ABOUT CONTENT BY SECTION
   ========================================================= */

const getAboutContentBySection = async (req, res) => {
  try {
    const { section } = req.params;

    const result = await pool.query(
      `SELECT *
       FROM about_content
       WHERE section = $1
       LIMIT 1`,
      [section]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "About section not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error fetching about section:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch about section",
    });
  }
};


module.exports = {
  getAboutContent,
  getAboutContentBySection,
};