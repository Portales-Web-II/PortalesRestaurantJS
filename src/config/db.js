const sequelize = require('sequelize');
const db = new sequelize(
    'dbportalesrestaurant', //nombre de la base de datos
    'portales', //usuario de la base de datos
    'Portales123@', //contraseña de la base de datos

    {
        host: '18.208.168.180',//servidor
        dialect: 'mysql',
        port: '3306',
    }
);
module.exports = db;