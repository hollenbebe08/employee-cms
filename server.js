const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
// const Department = require('./lib/departments');
// const viewAllEmployees = require('./lib/employees');
let ORM = require('./lib/employees');


//connects to the database
db.connect(err => {
    if (err) throw err;
});

const menuObject = {
    VIEW_EMPLOYEES: "View All Employees",
    ADD_EMPLOYEE: "Add Employee",
    UPDATE_EMPLOYEE: "Update Employee Positions",
    VIEW_ROLES: "View All Positions",
    ADD_POSITION: "Add Position",
    VIEW_DEPARTMENTS: "View All Departments",
    ADD_DEPARTMENT: "Add Department",
    QUIT: "Quit"
};

//first get the full menu
const promptMenu = async () => {
    const {menu} = await inquirer
    .prompt([
       {
        name: "menu",
        message: "What would you like to do?",
        type: "list",
        choices: ["View All Employees", "Add Employee", "Update Employee Positions", "View All Positions", "Add Position", "View All Departments", "Add Department", "Quit"]
       }
    ]);
    return menu;
};

const run = async () => {
    const orm = new ORM(await connection);
    let chooseQuit = false;
    while(!chooseQuit){
        const menu = await promptMenu();
        //  switch (menu) {
        //      menuObject.VIEW_EMPLOYEES {
        //          console.table(await orm.getEmployees())
        //          break;
        //      }
            // menuObject.VIEW_DEPARTMENTS: {
            //     console.table(await orm.getDepartments())
            //     break;
            // }
        }
        // default: {
        //     chooseQuit = true;
        //     break;
        // }
    }
// };
  
run();
  