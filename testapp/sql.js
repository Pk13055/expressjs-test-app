// file that contains the sql connection used 
// to query the database

var mysql      = require('mysql');


// app sql configuration
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'testt'
});
connection.connect();

module.exports = connection;