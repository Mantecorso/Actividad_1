let conn = require('../connections/mysqlconnection');

class UserModel
{
  getAll(cb){
    if(!conn) return cb("No se ha podido crear la conexión");
    const SQL ="SELECT * FROM login;";
    conn.query(SQL,(error, rows)=>{
      if(error) return cb(error);
      else return cb(rows);
    })
  }

  findUser(username, cb){
    if(!conn) return cb("No se ha podido crear la conexión");
    const SQL ="SELECT * FROM login WHERE username LIKE '%"+username+"%';";
    conn.query(SQL,(error, rows)=>{
      if(error) {
        return cb(error)
      }
      else {
        return cb(rows)
      };
    })
  }

}

module.exports = UserModel;
