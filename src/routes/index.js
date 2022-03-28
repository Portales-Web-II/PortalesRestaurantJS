const express = require ('express');
const appController = require ('../controllers/appController');
const routes = express.Router ();

routes.get( '/', appController.index );
routes.get( '/menu', appController.menu );
routes.get( '/about', appController.about );
module.exports = routes;