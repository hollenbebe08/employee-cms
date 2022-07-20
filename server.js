const express = require('express');
const db = require('./db/connection');

//connects the server to the database
const mysql = require('mysql2');

//port that the server is on
const PORT = process.env.PORT || 3001;
const app = express();

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});