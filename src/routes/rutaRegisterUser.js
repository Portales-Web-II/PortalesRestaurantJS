const { Router } = require('express');

const router = Router();

const pagina = "Menu"

router.get('/', (req, res) => {

    res.render('registerUser', {pagina: "Register User", layout: false})

});

router.post('/', (req, res) => {

    res.render('registerUser', {pagina: "Register User", layout: false})

    identidad = req.body.identidad;
    nombre = req.body.name;
    apellido = req.body.apellido
    telefono = req.body.telefono;
    direccion = req.body;
    userName = req.body.userName;
    email = req.body.email;
    password = req.body.password;

})


module.exports = router;