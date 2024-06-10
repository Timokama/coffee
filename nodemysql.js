var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"secret123",
});

con.connect(function(error) {
    if (error) throw error;
    con.query("CREATE DATABASE Digital", function (error, results) {
        if (error) throw error;
        console.log("Database Created");
    });
});