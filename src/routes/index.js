const express = require ('express');
const routes = express.Router ();

const pagina = "Portales Restaurant"

routes.get( '/', (req, res) => {
    res.render('home' , {pagina});
});
module.exports = routes;