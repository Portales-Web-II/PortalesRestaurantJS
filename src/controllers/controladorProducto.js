const ModeloProducto = require('../models/modeloProducto');

exports.inicio = async (req, res) =>{
    res.send("Estas en el inicio de productos");
};

exports.listarProductos = async (req, res) =>{

    try {
        var listaProductos = await ModeloProducto.findAll({
            attributes: [
                'idProducto',
                'nombre',
                'precio',
                'imagen',
                'descripcion',
                'idTipoProducto'
            ]
        });
        listaProductos = JSON.stringify(listaProductos);
        listaProductos = JSON.parse(listaProductos);

        console.log(listaProductos)

        res.render('products', {pagina: "Menu", listaProductos} )
    } catch (error) {
        res.render('error', {pagina: "ERROR", error, layout: false} )
    }

};

exports.guardar = async (req, res) =>{
    const{nombre, precio, imagen, descripcion, idTipoProducto} = req.body;

    if(!nombre || !precio || !idTipoProducto)
    {
        res.send("Debe enviar los datos que se solicitan");
    }
    else{
        await ModeloProducto.create({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            descripcion: descripcion,
            idTipoProducto: idTipoProducto
        })
        .then((data)=>{
            console.log(data);
            res.send("Registro almacenado correctamente...");
        })
        .catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos...");
        });
    }
};  

exports.modificar = async (req, res) =>{
    const {idProducto} = req.query;
    const {nombre, precio, imagen, descripcion, idTipoProducto} = req.body;

    if (!idProducto || !nombre || !precio|| !idTipoProducto)
    {
        res.send("Por favor envíe los datos para la actualización...");
    }
    else{
        var buscarProducto = await ModeloProducto.findOne({
            where:{
                idProducto: idProducto
            }
        });

        if (!buscarProducto) {
            res.send("El id no existe");
        }
        else{
            buscarProducto.nombre = nombre;
            buscarProducto.precio = precio;
            buscarProducto.imagen = imagen;
            buscarProducto.descripcion = descripcion;
            buscarProducto.idTipoProducto = idTipoProducto;
            buscarProducto.save()

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


exports.eliminar = async (req, res) =>{
    const {idProducto} = req.query;

    if (!idProducto)
    {
        res.send("Por favor envíe los datos para la eliminacion...");
    }
    else{
        var buscarProducto = await ModeloProducto.findOne({
            where:{
                idProducto: idProducto
            }
        });

        if (!buscarProducto) {
            res.send("El id no existe");
        }
        else{
            buscarProducto.estado = 'inactivo';
            buscarProducto.save()

            .then((data) => {
                console.log(data);
                res.send("Registro eliminado...");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al modificar los datos...");
            });
        }
    }
};