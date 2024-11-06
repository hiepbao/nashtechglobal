require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/home', (req, res) => {
  const query = 'SELECT * FROM `get_in_touch_Tong_Bao_Hiep` WHERE 1';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('An error occurred while fetching the data.');
    }
    res.render('home', { data: results });
  });
});

app.post('/contact', (req, res) => {
  const { name, email, country, company_name, message } = req.body;

  if (!name || !email || !company_name || !message ) {
    return res.status(400).send('All required fields must be filled!');
  }

  const query = 'INSERT INTO get_in_touch_Tong_Bao_Hiep (name, email, country, company_name, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, country, company_name, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('An error occurred while saving the data.');
    }
    res.send('Thank you for getting in touch!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//đưa lên render
