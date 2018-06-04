const Conection = require('../helpers/mysqlconnection');

let films = {};

films.fetchAll = (cb) => {
    if(!Conn) return cb("No se ha creado la conexion");
//buena practica. Comprueba si hay conexion, sino la hay devuelve un mensaje.//
    const SQL = "SELECT * FROM sakila.film LIMIT 10;";
// Envia una orden a la base de datos, aunque es un string aqui,// 
// tiene que terminar en ; porque es una orden en la base de datos.//      
    Conn.query(SQL, (error, rows) => {
        if (error) return cb(error);
        else return cb(rows);
// cb es un callback llama a la funcion.//        
    });  
};

module.exports = films;
