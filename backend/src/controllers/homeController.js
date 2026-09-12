const pool = require("../config/database");

/* =========================================================
   GET ALL HOME CONTENT
   ========================================================= */

const getHomeContent = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM home_content
       ORDER BY id ASC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching home content:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch home content",
    });
  }
};


/* =========================================================
   GET HOME CONTENT BY SECTION
   ========================================================= */

const getHomeContentBySection = async (req, res) => {
  try {
    const { section } = req.params;

    const result = await pool.query(
      `SELECT *
       FROM home_content
       WHERE section = $1
       LIMIT 1`,
      [section]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Home section not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error fetching home section:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch home section",
    });
  }
};


module.exports = {
  getHomeContent,
  getHomeContentBySection,
};