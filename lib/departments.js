// const db = require('./db/connection');

//department constructor
class Department {
    constructor(db, id=0, department_name =""){
        this.db = db;
        this.id = id;
        this.department_name = department_name;
    }
};


module.exports = Department;


