const inquirer = require('inquirer');
const db = require('./database/connection')
require('console.table');

db.connect(function(err) {
    if (err) {
        console.log(err)
    }

const start = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        }
    ]).then((answers)=>{
        console.log(answers.action)
        if (answers.action == "View all departments"){
            // Get all Departments inside of the database we created
            viewDepartment();
        } else if(answers.action == "View all roles"){
            // Get all Roles inside of the database we created
            viewRoles();
        } else if (answers.action == "View all employees") {
            // Get all employees inside of the database we created 
            viewEmployees();
        }else if (answers.action == "Add a department") {
            // Add departments inside of the database
            addDepartment()
        } else if (answers.action == "Add a role"){
            // Add roles inside of database
            addRole();
        } else if (answers.action == "Add an employee") {
            // Add employees inside of database
            addEmployee();
        }else if (answers.action == "Update an employee role") {
            //Update any role of various employee you chose
            updateRole();
        }
    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?"
        }
    ])
    .then((answers) => {
        console.log('Adding new department...');
        db.query(`INSERT INTO department SET ?`, answers, function(err, results) {
            if(err) {
                console.log(err)
            }
            
            console.log("Successfully added!")
            start();
        });
    })
}

const viewDepartment = () => {
        console.log('Viewing all departments...')
        db.query(`SELECT * FROM department`, function(err, results) {
            if(err) {
                console.log(err)
            }

            console.table(results)
            start();
        });

}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the role?"
        },
        {
            type: "input",
            name: "salary",
            message: "How much do you make per hour?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the ID number of your department?"
        }
    ])
    .then((answers) => {
        console.log('Adding new department...');
        db.query(`INSERT INTO role SET ?`, answers, function(err, results) {
            if(err) {
                console.log(err)
            }
            
            console.log("Successfully added!")
            start();
        });
    })
}

const viewRoles = () => {
    console.log('Viewing all roles...')
    db.query(`SELECT * FROM role JOIN department WHERE department.id=role.department_id`, function(err, results) {
        if(err) {
            console.log(err)
        }

        console.table(results)
        start();
    });

}


const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the employee?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the employee"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is your employee's role id?"
        },
        {
            type: "input",
            name: "manager_id",
            message: "Do you have a manager?",
            default: 1
        }
    ])
    .then((answers) => {
        console.log('Adding new employee...');
        db.query(`INSERT INTO employee SET ?`, answers, function(err, results) {
            if(err) {
                console.log(err)
            }
            
            console.log("Successfully added!")
            start();
        });
    })
}

const viewEmployees = () => {
    console.log('Viewing all employees...')
    db.query(`SELECT * FROM employee JOIN role WHERE role.id=employee.role_id`, function(err, results) {
        if(err) {
            console.log(err)
        }

        console.table(results)
        start();
    });

}

const updateRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Choose the employee that is switching a role.",
            
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the last name of the employee?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is your employee's role id?"
        }
    
    ])
    .then((answers) => {
        console.log('Updating employee role...');
        db.query(`UPDATE employee SET ? WHERE ?`, [{
            role_id: answers.role_id
        },{
            first_name: answers.employeeName, 
            // last_name: answers.lastName
        } ], function(err, results) {
            if(err) {
                console.log(err)
            }
            
            console.log("Successfully updated!")
            start();
        });
    })
}



start();

})