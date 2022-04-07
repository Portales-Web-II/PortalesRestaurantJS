const ModeloCarrito = require('../models/modeloCarrito');
const modeloProductosPedido = require('../models/modeloProductosPedido');

exports.inicio = async (req, res) =>{
    res.render('carritoShoping');
};

exports.guardar = async (req, res) =>{
    const{ID, Nombre, Cantidad, Precio, Descripcion} = req.body;

    if(!Nombre || !Cantidad || !Precio)
    {
        res.send("Debe enviar los datos que se solicitan");
    }
    else{
        
        res.render('carritoShoping', 
            {
                ID: ID,
                Nombre: Nombre,
                Cantidad: Cantidad,
                Precio: Precio,
                Descripcion: Descripcion
            }
        )
    }
};

exports.pago = async (req, res) =>{

    const idProductosPedido_max = await modeloProductosPedido.max('idProductosPedido');
    const idProductosPedido = idProductosPedido_max + 1;
    console.log(idProductosPedido_max);

    const{ idProducto,cantidad, Precio} = req.body; 
    if( !idProducto || !cantidad)
    {
        res.send("Debe enviar los datos que se solicitan");
    }
    else{
        await modeloProductosPedido.create({
            idProductosPedido: idProductosPedido,
            idProducto: idProducto,
            cantidad:cantidad
        })
        .then((data)=>{ 
            console.log(data.idProductosPedido);
            res.json("Pago procesado correctamente!");
        })
        .catch((error)=>{
            console.log(error);
            res.json("Error al procesar el pago!");
        });
    }
};