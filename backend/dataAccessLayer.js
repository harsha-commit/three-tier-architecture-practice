const mysql = require("mysql2/promise");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database_name",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function getUsersFromDatabase() {
  const [rows, fields] = await pool.query("SELECT * FROM users");
  return rows;
}

async function createUserInDatabase(name, email) {
  const [result] = await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  const newUser = { id: result.insertId, name, email };
  return newUser;
}

module.exports = { getUsersFromDatabase, createUserInDatabase };
