//Definimos las variables
const { Router } = require('express');

//Vinculamos el archivo para cargarlo
const controladorPersona = require('../controllers/controladorPersona');
const router = Router();

//Definimos dos variables reques(reciben), res(envian respuestas)
const pagina = "Register Person"

router.get('/', (req, res) => {

    res.render('registerPerson', {pagina: pagina, layout: false})

});

module.exports = router;