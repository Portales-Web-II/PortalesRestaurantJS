const { Router } = require('express');
const controladorDetalleFactura = require('../controllers/controladorDetalleFactura');
const router = Router();

const pagina = "Pago"

// router.get('/', (req, res) => {
//     res.render('checkout' , {pagina});
// });

router.get('/', controladorDetalleFactura.listarDetalle);

module.exports = router;