require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const pool = require("./config/database");

const industryRoutes = require("./routes/industryRoutes");
const productRoutes = require("./routes/productRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

const PORT = process.env.PORT || 5000;


/* =========================================================
   MIDDLEWARE
   ========================================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


/* =========================================================
   TEST ROUTE
   ========================================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "YARI backend is running",
  });
});


/* =========================================================
   DATABASE TEST
   ========================================================= */

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "PostgreSQL connection successful",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: error.message,
    });
  }
});


/* =========================================================
   INDUSTRIES API
   ========================================================= */

app.use("/api/industries", industryRoutes);


/* =========================================================
   PRODUCTS API
   ========================================================= */

app.use("/api/products", productRoutes);

/* =========================================================
   GALLERY API
   ========================================================= */

app.use("/api/gallery", galleryRoutes);

/* =========================================================
   HOME CONTENT API
   ========================================================= */

app.use("/api/home", homeRoutes);

/* =========================================================
   ABOUT CONTENT API
   ========================================================= */

app.use("/api/about", aboutRoutes);

/* =========================================================
   INDUSTRIES API
   ========================================================= */

app.use("/api/industries", industryRoutes);


/* =========================================================
   PRODUCTS API
   ========================================================= */

app.use("/api/products", productRoutes);


/* =========================================================
   GALLERY API
   ========================================================= */

app.use("/api/gallery", galleryRoutes);


/* =========================================================
   HOME CONTENT API
   ========================================================= */

app.use("/api/home", homeRoutes);


/* =========================================================
   ABOUT CONTENT API
   ========================================================= */

app.use("/api/about", aboutRoutes);


/* =========================================================
   CONTACT API
   ========================================================= */

app.use("/api/contact", contactRoutes);

/* =========================================================
   ADMIN API
   ========================================================= */

app.use("/api/admin", adminRoutes);

/* =========================================================
   START SERVER
   ========================================================= */

app.listen(PORT, () => {
  console.log(`YARI backend running on http://localhost:${PORT}`);
});