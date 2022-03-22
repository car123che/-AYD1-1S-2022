"use stricts";

let chai = require("chai");
let chai_http = require("chai-http");
const expect = require("chai").expect;

chai.use(chai_http);
const url = "http://localhost:9000";

//el describe se implementa por cada prueba unitaria a realizar

describe("Insertar Una Persona", () => {
    it("Deberia Insertar una Persona", (done) => {
      chai
        .request(url)
        .post("/insertar/persona")
        .send({ id: 2, nombre: "Sergio", edad: 23 })
        .end(function (err, res) {
          console.log(err);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

describe("Obtener Personas", () => {
  it("Deberia traer la lista de personas", (done) => {
    chai
      .request(url)
      .get("/obtener/personas")
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});


describe("Obtener ID", () => {
    it("Deberia traer ID igual a 1", (done) => {
        chai.request(url)
        .get('/obtener/id')
        .end(function(err, res){
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('id').to.be.equal(1);
            done();
        });
    });
});