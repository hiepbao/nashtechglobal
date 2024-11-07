const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact');
});

router.post('/', async (req, res) => {
  const { name, email, country, company_name, message } = req.body;

  if (!name || !email || !company_name || !message) {
    return res.status(400).send('All required fields must be filled!');
  }

  const query = 'INSERT INTO get_in_touch_Tong_Bao_Hiep (name, email, country, company_name, message) VALUES (?, ?, ?, ?, ?)';

  try {
    await db.query(query, [name, email, country, company_name, message]);
    res.send('Thank you for getting in touch!');
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).send('An error occurred while saving the data.');
  }
});

module.exports = router;