const { Router } = require('express');

const controladorHome = require('../controllers/controladorHome');
const router = Router();

router.get('/', controladorHome.listarProductos);


module.exports = router;