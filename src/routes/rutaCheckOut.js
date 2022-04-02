const { Router } = require('express');
const router = Router();

const pagina = "Pago"

router.get('/', (req, res) => {
    res.render('checkout' , {pagina});
});

module.exports = router;