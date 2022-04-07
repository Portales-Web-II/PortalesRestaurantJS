const { Router } = require('express');
const { body } = require('express-validator');

const router = Router();

const controladorUsuario = require("../controllers/controladorUsuario");

const pagina = "Register User"

router.get('/', (req, res) => {

    res.render('registerUser', {pagina: pagina, layout: false})

});

router.post('/register', (req, res) => {

    const { identidad, nombre, apellido, telefono, direccion } = req.body;
    
    body('identidad'), 
    body('userName'),
    body('email'),
    body('password'), 

    controladorUsuario.guardar

})


module.exports = router;