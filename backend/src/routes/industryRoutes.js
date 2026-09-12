const express = require("express");

const {
  getIndustries,
  createIndustry,
  updateIndustry,
  deleteIndustry,
} = require("../controllers/industryController");

const { uploadImage } = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getIndustries);

router.post(
  "/",
  uploadImage.single("image"),
  createIndustry
);

router.put(
  "/:id",
  uploadImage.single("image"),
  updateIndustry
);

router.delete(
  "/:id",
  deleteIndustry
);

module.exports = router;