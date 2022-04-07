const ModeloProducto = require('../models/modeloProducto');
var Tipos;

exports.inicio = async (req, res) => {
    res.send("Estas en el inicio de productos");
};

exports.listarProductos = async (req, res) => {

    try {
        var listaProductos = await ModeloProducto.findAll({
            attributes: [
                'nombre',
                'imagen',
                'descripcion',
            ],
            limit: 4
        });
        
        listaProductos = JSON.stringify(listaProductos);
        listaProductos = JSON.parse(listaProductos);
                
        console.log(listaProductos);
        res.render('home', { pagina: "Inicio", listaProductos })
    } catch (error) {
        res.render('error', { pagina: "ERROR", error, layout: false })
    }

};