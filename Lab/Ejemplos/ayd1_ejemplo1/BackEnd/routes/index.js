const express = require('express'); //cargar framework de nodejs
const router = express.Router(); //cargar nucle router

//importar controlador
const  test_controller = require('../controllers/test.controller')
module.exports = function(){ //para regresar nuestrar rutas
    
    //declarar una ruta
    router.get('/test', test_controller.helloWorld);
    return router;
}