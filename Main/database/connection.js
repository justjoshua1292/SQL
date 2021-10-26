const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootr00t!",
    database: "JOSHDATABASE"
})

module.exports = connection;