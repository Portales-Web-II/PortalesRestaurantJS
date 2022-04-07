const { Result } = require('express-validator');
const sequelize = require('sequelize');
const modeloDetalleFactura = require('../models/modeloDetalleFactura');
const ModeloFacturacion = require('../models/modeloFacturacion');
const ModeloPedido = require('../models/modeloPedido');
const db = require('../config/db');

exports.listarDetalle = async (req, res) => {

    try {
        var listaDetalle = await modeloDetalleFactura.findAll({
            where: {
                idPedido: 5
            },
            attributes: [
                'idPedido',
                'idProducto',
                'nombre',
                'cantidad',
                'precio',
                'subtotal'
            ]
        });
        listaDetalle = JSON.stringify(listaDetalle);
        listaDetalle = JSON.parse(listaDetalle);

        console.log(listaDetalle);

        res.render('checkout', { pagina: "Pago", listaDetalle })
    } catch (error) {
        res.render('error', { pagina: "ERROR", error, layout: false })
    }
};

exports.modificarPedido = async (req, res) =>{
    const {idPedido} = req.query;
    const{direccionEntrega} = req.body;


    if (!idPedido || !direccionEntrega) {
        //Mostramos mensaje al usuario
        res.send("Por favor envíe los datos para la actualización...");
    }
    else{
        var buscarPedido = await ModeloPedido.findOne({
            //Le digo cual es el dato que comparará
            where:{
                idPedido: idPedido
            }
        });

        //Validar si está null el campo
        if (!buscarPedido) {
            res.send("El id no existe");
        }
        else{
            buscarPedido.direccionEntrega = direccionEntrega;
            buscarPedido.save()

            //Mostramos mensaje de verificación
            .then((data) => {
                console.log(data);
                res.send("Registro actualizado y guardado...");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al modificar los datos...");
            });
        }
    }
};