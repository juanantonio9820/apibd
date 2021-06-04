const mysql = require('mysql');
const mysqlconnection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'12345678',
    database: 'universidades'

});
mysqlconnection.connect(function (err) {
if(err) {
    console.log(err);
    return;
} else {
    console.log('CONEXION EXITOSA, BASE DE DATOS CONECTADA');
}

});

module.exports = mysqlconnection;
