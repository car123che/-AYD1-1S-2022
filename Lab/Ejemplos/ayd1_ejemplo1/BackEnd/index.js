//referencias
const express = require('express');
const routes = require('./routes'); //rutas
const path = require('path'); //cargar rutas de archivos
const bodyParser = require('body-parser'); // cargar lector de formularios

//Crear una app de express
const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended: true})); //habilitar lectura formularios
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Cargar rutas
app.use('/api/test', routes());

//que escuche un determinado puerto, se ejecutara en el localhost
app.listen(3000);
console.log('Servidor en el puerto  4000');