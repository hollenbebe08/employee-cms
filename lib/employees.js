// const db = require('./db/connection');

//object relational mapping for the departments, positions, and employees
class ORM {
    constructor(db){
        this.db = db;
    }
    async getEmployees() {
        const [employees] =  await this.db.query('SELECT * FROM employees');
        return employees;
    }
};

module.exports = ORM;
