const { Router } = require('express');

const controladorProducto = require('../controllers/controladorProducto');
const router = Router();

const pagina = "Menu"

router.get('/', (req, res) => {
    res.render('products' , {pagina});
});

module.exports = router;