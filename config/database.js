const mysql = require("mysql");
require("dotenv").config();
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  // host: "localhost",
  // user: process.env.MYSQL_ID,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.DB_NAME,
  multipleStatements: true,
});
// koneksi database
koneksi.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});
module.exports = koneksi;
