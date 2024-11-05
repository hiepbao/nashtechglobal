require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối MySQL
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

// Route cho trang HOME
app.get('/', (req, res) => {
  res.render('home');
});

// Route cho trang "Get in Touch"
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Xử lý dữ liệu từ form "Get in Touch"
app.post('/contact', (req, res) => {
  const { name, email, country, company_name, message } = req.body;

  // Kiểm tra các trường bắt buộc
  if (!name || !email || !company_name || !message ) {
    return res.status(400).send('All required fields must be filled!');
  }

  // Chèn dữ liệu vào bảng get_in_touch_your_name
  const query = 'INSERT INTO get_in_touch_Tong_Bao_Hiep (name, email, country, company_name, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, country, company_name, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('An error occurred while saving the data.');
    }
    res.send('Thank you for getting in touch!');
  });
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//đưa lên render
