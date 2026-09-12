const express = require("express");

const {
  getAboutContent,
  getAboutContentBySection,
} = require("../controllers/aboutController");

const router = express.Router();

/* =========================================================
   GET ALL ABOUT CONTENT
   ========================================================= */

router.get("/", getAboutContent);


/* =========================================================
   GET ABOUT CONTENT BY SECTION
   ========================================================= */

router.get("/:section", getAboutContentBySection);


module.exports = router;