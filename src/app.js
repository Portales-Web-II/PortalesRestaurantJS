//Definición de variables importantes
const express = require('express');
const morgan = require('morgan');
const path  = require('path');
const { engine } = require('express-handlebars');

//Las variables de entorno deben estar definidas antes de todo
require('dotenv').config();

const app = express();
app.set('port', process.env.port || 5000);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('json spaces', 2);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static(__dirname + "/public"));

app.use('/app', require('./routes/index'))
app.use('/api/', require('./routes'));
app.use('/api/productos/', require('./routes/rutaProducto'));
app.use('/api/tipoProductos/', require('./routes/rutaTipoProducto'));
app.use('/api/usuarios', require('./routes/rutasUsuario'));
app.use('/api/autenticacion', require('./routes/rutasAutenticacion'));
app.use('/api/personas/', require('./routes/rutaPersonas'));
app.use('/api/cargos/', require('./routes/rutaCargos'));
app.use('/api/facturas/', require('./routes/rutaFacturas'));
app.use('/api/pedidos/', require('./routes/rutaPedidos'));
app.use('/api/productosCombo/', require('./routes/rutaProductosCombo'));
app.use('/api/productosPedido/', require('./routes/rutaProductosPedido'));

//Aperturo el puerto donde iniciará
app.listen(5000, () =>{
    console.log("Servidor iniciado en el puerto 5000");
})

//localhost:5000/api/productos