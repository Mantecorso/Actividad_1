let conn = require('../connections/mysqlconnection');

class UserModel {
  getAll(cb) {
    if (!conn) return cb("No se ha podido crear la conexión");
    const SQL = "SELECT * FROM login;";
    conn.query(SQL, (error, rows) => {
      if (error) return cb(error);
      else return cb(rows);
    })
  }

  findUser(username, cb) {
    if (!conn) return cb("No se ha podido crear la conexión");
    const SQL = "SELECT * FROM login WHERE username LIKE '%" + username + "%';";
    //en la base de datos selecciona la tabla login compueba username
    conn.query(SQL, (error, rows) => {
      if (error) {
        return cb(error)
      } else {
        return cb(rows)
      };
    })
  }

  registroUser(uname, psw, email, cb) {
    if (!conn) return cb("no se ha podido crear la conexion");
    const SQL = `INSERT INTO users(username, email, password) VALUES ('${uname}','${psw}','${email}');`;
    //en la base de datos inserta los datos nuevos de usuario al registrarse
    conn.query(SQL, (error, rows) => {
      if (error) {
        return cb(error);
      } else {
        return cb(rows);
      }
    })
  }

}

module.exports = UserModel;