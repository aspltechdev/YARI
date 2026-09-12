const pool = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


/* =========================================================
   ADMIN LOGIN
   ========================================================= */

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;


    /* -------------------------------------------------------
       VALIDATION
    ------------------------------------------------------- */

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }


    /* -------------------------------------------------------
       FIND ADMIN
    ------------------------------------------------------- */

    const result = await pool.query(
      `SELECT *
       FROM admin_users
       WHERE email = $1
       AND is_active = true
       LIMIT 1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    const admin = result.rows[0];


    /* -------------------------------------------------------
       CHECK PASSWORD
    ------------------------------------------------------- */

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    /* -------------------------------------------------------
       CREATE JWT TOKEN
    ------------------------------------------------------- */

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );


    /* -------------------------------------------------------
       LOGIN SUCCESS
    ------------------------------------------------------- */

    res.status(200).json({
      success: true,
      message: "Admin login successful",
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });

  } catch (error) {
    console.error("Admin login error:", error);

    res.status(500).json({
      success: false,
      message: "Admin login failed",
    });
  }
};


module.exports = {
  loginAdmin,
};