const mysql = require('mysql');

// Configure MySQL connection
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydatabase',
  });

  module.exports = database;