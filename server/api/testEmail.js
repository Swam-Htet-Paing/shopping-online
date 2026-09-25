const express = require('express');
const { sendMail } = require('../utils/EmailUtil');
const router = express.Router();


// Test Registration Route
router.post('/register', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    // Simulate sending email verification
    const token = 'test-token-12345';
    await sendMail(email, token);

    return res.status(201).json({
      message: 'Registration successful and email sent.'
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: 'Unable to send email.' });
  }
});

module.exports = router;