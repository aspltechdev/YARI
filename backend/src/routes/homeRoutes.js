const express = require("express");

const {
  getHomeContent,
  getHomeContentBySection,
} = require("../controllers/homeController");

const router = express.Router();

/* =========================================================
   GET ALL HOME CONTENT
   ========================================================= */

router.get("/", getHomeContent);


/* =========================================================
   GET HOME CONTENT BY SECTION
   ========================================================= */

router.get("/:section", getHomeContentBySection);


module.exports = router;