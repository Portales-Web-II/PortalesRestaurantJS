const { Result } = require('express-validator');
const sequelize = require('sequelize');
const modeloDetalleFactura = require('../models/modeloDetalleFactura');
const ModeloFacturacion = require('../models/modeloFacturacion');
const ModeloPedido = require('../models/modeloPedido');

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

try {
    ModeloPedido.sync({ alter: true }).then(() => {
        return sequelize.query(`SELECT * FROM dbportalesrestaurant.pedido`, { type: sequelize.QueryTypes.SELECT })
    }).then((data) => {
        [result, metadata] = data;
        console.log(result);
        console.log(metadata);
    }).catch((err) => {
        console.log(err);
    });
} catch (error) {
    res.render('error', { pagina: "ERROR", error, layout: false })
}