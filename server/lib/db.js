const mysql = require('mysql');


var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("connection successfully");
})


module.exports = conn;