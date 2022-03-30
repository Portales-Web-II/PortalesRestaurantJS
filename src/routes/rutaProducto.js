const { Router } = require('express');

const controladorProducto = require('../controllers/controladorProducto');
const router = Router();

router.get('/', (req, res) => {
    res.render('products');
});

module.exports = router;