const { Router } = require('express');

const controladorCarrito = require('../controllers/controladorCarrito');
const router = Router();

router.get('/', controladorCarrito.inicio);
//router.get('/listar', controladorCarrito.listarProductos);
router.post('/guardar', controladorCarrito.guardar);
router.post('/procesar-pago', controladorCarrito.pago);
/*router.put('/modificar', controladorCarrito.modificar);
router.delete('/eliminar', controladorCarrito.eliminar);*/

module.exports = router;