const pool = require("../config/database");


/* =========================================================
   GET CONTACT INFORMATION
   ========================================================= */

const getContactInfo = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM contact_info
       ORDER BY id ASC
       LIMIT 1`
    );

    res.status(200).json({
      success: true,
      data: result.rows[0] || null,
    });

  } catch (error) {
    console.error(
      "Error fetching contact information:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact information",
    });
  }
};


/* =========================================================
   SUBMIT CONTACT MESSAGE
   ========================================================= */

const createContactMessage = async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;


    /* -----------------------------------------------------
       VALIDATION
    ----------------------------------------------------- */

    if (!name || !email || !message) {

      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });

    }


    /* -----------------------------------------------------
       INSERT MESSAGE
    ----------------------------------------------------- */

    const result = await pool.query(
      `INSERT INTO contact_messages
       (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        name,
        email,
        phone || null,
        subject || null,
        message,
      ]
    );


    res.status(201).json({
      success: true,
      message: "Contact message submitted successfully",
      data: result.rows[0],
    });

  } catch (error) {

    console.error(
      "Error creating contact message:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to submit contact message",
    });

  }
};


/* =========================================================
   GET ALL CONTACT MESSAGES
   ========================================================= */

const getContactMessages = async (req, res) => {
  try {

    const result = await pool.query(
      `SELECT *
       FROM contact_messages
       ORDER BY created_at DESC, id DESC`
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });

  } catch (error) {

    console.error(
      "Error fetching contact messages:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact messages",
    });

  }
};


module.exports = {
  getContactInfo,
  createContactMessage,
  getContactMessages,
};