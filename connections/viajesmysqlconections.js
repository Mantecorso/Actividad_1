const MYSQL = require('mysql');
const CONNEC = MYSQL.createConnection({
  host:'localhost',
  user:'root',
  password:'iker5nerea13',
  database:'viajes'
})

module.exports = CONNEC;