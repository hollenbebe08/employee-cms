const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

//connects to the database
db.connect(err => {
    if (err) throw err;
});