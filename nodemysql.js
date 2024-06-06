var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"secret123",
    database:"digital"
});

con.connect(function(error) {
    if (error) throw error;
    con.query("SELECT * FROM users", function (error, results) {
        if (error) throw error;
        console.log(results);
    });
});