const express = require("express");

const {
  getContactInfo,
  createContactMessage,
  getContactMessages,
} = require("../controllers/contactController");

const router = express.Router();


/* =========================================================
   GET CONTACT INFORMATION
   ========================================================= */

router.get(
  "/",
  getContactInfo
);


/* =========================================================
   SUBMIT CONTACT MESSAGE
   ========================================================= */

router.post(
  "/message",
  createContactMessage
);


/* =========================================================
   GET ALL CONTACT MESSAGES
   ========================================================= */

router.get(
  "/messages",
  getContactMessages
);


module.exports = router;