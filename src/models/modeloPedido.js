const sequelize = require('sequelize');
const db = require('../config/db');

//Definimos los campos de las tablas
const Pedido = db.define(
    "pedido",
    {
        idPedido: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        direccionEntrega: {
            type: sequelize.STRING(250),
            allowNull: false,
        },

        subtotal: {
            type: sequelize.DOUBLE,
            allowNull: true,
        },

        idCombos: {
            type: sequelize.INTEGER,
            allowNull: true,
        },

        idProductosPedido: {
            type: sequelize.INTEGER,
            allowNull: true,
        },

        idUsuario: {
            type: sequelize.INTEGER,
            allowNull: false,
        },

        estado: {
            type: sequelize.ENUM('recibido', 'facturado', 'cancelado'),
            allowNull: false,
            defaultvalue: 'recibido'

        }
    },
    {
        tableName: "pedido",
        timestamps: false,
    }
);

//Exportamos este modelo
module.exports = Pedido;