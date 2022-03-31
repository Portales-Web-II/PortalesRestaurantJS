const { Router } = require('express');

const controladorProducto = require('../controllers/controladorProducto');
const router = Router();

const pagina = "Menu"

router.get('/', controladorProducto.listarProductos);


module.exports = router;