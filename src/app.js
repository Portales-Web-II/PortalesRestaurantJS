//Definición de variables importantes
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('json spaces', 2);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static(__dirname + "/public"));

app.use('/app', require('./routes/index'))
app.use('/app/menu', require('./routes/rutaProducto'))
app.use('/app/about', require('./routes/rutaAboutUs'))
app.use('/app/checkout', require('./routes/rutaCheckOut'))

app.use('/app/detallefactura/', require('./routes/rutaDetalleFactura'));
app.use('/app/login', require('./routes/rutasLogin'))
app.use('/app/Users', require('./routes/rutaRegisterUser'))
app.use('/app/Persons', require('./routes/rutaPersonas'))

//Aperturo el puerto donde iniciará
app.listen(5000, () =>{
    console.log("Servidor iniciado en el puerto 5000");
})

//localhost:5000/api/productos