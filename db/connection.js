//import mysql2
const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,

      //use values stored in .env file
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },
    console.log('Connected to the cms database.')
);

module.exports = db;