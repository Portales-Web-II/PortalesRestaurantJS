const { Router } = require('express');

const controladorProducto = require('../controllers/controladorProducto');
const router = Router();

const pagina = "Menu"

router.get('/', (req, res) => {
    res.render('menu' , {pagina});
});

module.exports = router;