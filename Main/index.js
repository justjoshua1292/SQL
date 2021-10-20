const inquirer = require('inquirer');
require('console.table');

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
    } else if(answers.action == "View all roles"){
        // Get all Roles inside of the database we created
    } else if (answers.action == "View all employees") {
        // Get all employees inside of the database we created 
    }else if (answers.action == "Add a department") {
        // Add departments inside of the database
    } else if (answers.action == "Add a role"){
        // Add roles inside of database
    } else if (answers.action == "Add an employee") {
        // Add employees inside of database
    }else if (answers.action == "Update an employee role") {
        //Update any role of various employee you chose
    }

})