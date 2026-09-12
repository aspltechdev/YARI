const jwt = require("jsonwebtoken");


/* =========================================================
   ADMIN AUTHENTICATION MIDDLEWARE
   ========================================================= */

const authMiddleware = (req, res, next) => {
  try {
    /* -------------------------------------------------------
       GET AUTHORIZATION HEADER
       ------------------------------------------------------- */

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }


    /* -------------------------------------------------------
       CHECK BEARER FORMAT
       ------------------------------------------------------- */

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format",
      });
    }


    /* -------------------------------------------------------
       EXTRACT TOKEN
       ------------------------------------------------------- */

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }


    /* -------------------------------------------------------
       VERIFY JWT
       ------------------------------------------------------- */

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );


    /* -------------------------------------------------------
       STORE ADMIN INFORMATION
       ------------------------------------------------------- */

    req.admin = decoded;


    /* -------------------------------------------------------
       CONTINUE TO ROUTE
       ------------------------------------------------------- */

    next();

  } catch (error) {
    console.error(
      "Authentication error:",
      error.message
    );

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Authentication token has expired",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};


module.exports = authMiddleware;