const MYSQL = require('mysql');
const CONN = MYSQL.createConnection({
  host:'localhost',
  user:'root',
  password:'iker5nerea13',
  database:'integration'
})

module.exports = CONN;
