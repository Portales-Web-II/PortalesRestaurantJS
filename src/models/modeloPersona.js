const sequelize = require('sequelize');
const db = require('../config/db');

//Definimos los campos de las tablas
const Persona = db.define(
    "persona",
    {
        idPersona:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        identidad:{
            type: sequelize.STRING(13),
            allowNull: false,
        },

        nombre:{
            type: sequelize.STRING(45),
            allowNull: false,
        },

        apellido:{
            type: sequelize.STRING(45),
            allowNull: false,
        },

        telefono:{
            type: sequelize.STRING(45),
            allowNull: false,
        },

        idCargo:{
            type: sequelize.INTEGER,
            allowNull: true,
        },

        direccion:{
            type: sequelize.STRING(250),
            allowNull: true, //permite nulos
            default: null,
        },

        estado:{

            type: sequelize.ENUM('activo','inactivo'),
            allowNull: true,
            defaultValue: 'activo'

        }
       
    },

    {
        tableName: "persona",
        timestamps: false,
    }
);

//Exportamos este modelo
module.exports = Persona;