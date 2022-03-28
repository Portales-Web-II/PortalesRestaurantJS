//Definimos las variables
const { Router } = require('express');
const res = require('express/lib/response');
const { render } = require('express/lib/response')
const router = Router();

router.get('/', (req, res) => {
    res.render('home');
})

module.exports = router;