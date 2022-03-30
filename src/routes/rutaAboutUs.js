const { Router } = require('express');
const router = Router();

const pagina = "Acerca de nosotros"

router.get('/', (req, res) => {
    res.render('about' , {pagina});
});

module.exports = router;