const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/home', async (req, res) => {
  const query = 'SELECT * FROM `get_in_touch_Tong_Bao_Hiep` WHERE 1';

  try {
    const [results] = await db.query(query);
    res.render('home', { data: results });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('An error occurred while fetching the data.');
  }
});

module.exports = router;