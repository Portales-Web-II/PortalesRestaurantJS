const { Router } = require('express');

const controladorDetalleFactura = require('../controllers/controladorDetalleFactura');
const router = Router();

router.get('/', controladorDetalleFactura.listarDetalle);

module.exports = router;