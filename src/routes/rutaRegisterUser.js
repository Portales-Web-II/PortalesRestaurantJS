const { Router } = require('express');
const { body } = require('express-validator');

const router = Router();

const controladorUsuario = require("../controllers/controladorUsuario");

const pagina = "Register User"

router.get('/', (req, res) => {

    res.render('registerUser', {pagina: pagina, layout: false})

});

router.post('/register', function(req, res){
    
    identidad: req.body.identidad
    nombreUsuario: req.body.userName
    correo: req.body.email
    contrasena: req.body.password,

    controladorUsuario.guardar

})


module.exports = router;