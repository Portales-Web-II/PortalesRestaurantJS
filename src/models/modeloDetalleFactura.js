const sequelize = require('sequelize');
const db = require('../config/db');

//Definimos los campos de las tablas
const detalleFactura = db.define(
    "detalleFactura",
    {
        idPedido: {
            type: sequelize.INTEGER,
        },

        idProducto: {
            type: sequelize.INTEGER,
        },

        nombre:{
            type: sequelize.STRING(45),
        },

        cantidad:{
            type: sequelize.INTEGER,
        },

        precio:{
            type: sequelize.DOUBLE,
        },

        subtotal: {
            type: sequelize.DOUBLE,
        },
    },

    {
        tableName: "detalleFactura",
        timestamps: false,
    }
);

module.exports = detalleFactura;