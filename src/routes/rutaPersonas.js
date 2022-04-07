//Definimos las variables
const { Router } = require('express');

//Vinculamos el archivo para cargarlo
const controladorPersona = require('../controllers/controladorPersona');
const ModeloPersona = require('../models/modeloPersona');
const router = Router();

//Definimos dos variables reques(reciben), res(envian respuestas)
const pagina = "Register Person"

router.get('/', (req, res) => {

    res.render('registerPerson', {pagina: pagina, layout: false})

});

router.post('/register', function(req, res){

    var persona = req.body;
    persona = JSON.stringify(persona);

    persona = JSON.parse(persona);

        identidad: persona.identidad
        nombre: persona.name
        apellido: persona.apellido
        telefono: persona.telefono
        direccion: persona.direccion, 

        controladorPersona.guardarPersona

})

module.exports = router;