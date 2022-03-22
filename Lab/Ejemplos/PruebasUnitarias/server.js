//imports

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { nextTick } = require("process");

//settings
var app = express();
var port = 9000;
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(morgan("dev"));
app.listen(port);
console.log("Listening on port", port);

//API
let personas = [
  { id: 0, nombre: "Carlos", edad: 21 },
  { id: 1, nombre: "Agustín", edad: 22 },
];

// Obtener todas las personas
app.get("/obtener/personas", async (req, res, next) => {
  res.send(200, {body:personas});
  next();
});

app.get("/obtener/id", async (req, res, next) => {
    res.send(200, {id:1, name:"test"});
    next();
  });

app.post("/insertar/persona", async (req, res, next) => {
    let body = req.body;
    console.log(body);
    personas.push(body);
    res.send(200, 'Se ha introducido la personas');
});
