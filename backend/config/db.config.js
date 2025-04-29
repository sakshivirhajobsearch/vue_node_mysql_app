const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Change to your DB username
  password: 'admin',  // Change to your DB password
  database: 'vue_node_db'
});

connection.connect(err => {
  if (err) {
    console.error('DB Connection Failed:', err);
    return;
  }
  console.log('Connected to MySQL DB');
});

module.exports = connection;
