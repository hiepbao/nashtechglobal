const mysql = require('mysql2/promise');

let db;
(async () => {
  try {
    db = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    console.log('Connected to MySQL database.');
  } catch (err) {
    console.error('Database connection failed:', err.stack);
    process.exit(1); 
  }
})();

module.exports = db;