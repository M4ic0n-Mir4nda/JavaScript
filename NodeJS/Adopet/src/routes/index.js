const bodyParser = require("body-parser");
const tutores = require("./tutoresRoute.js");
const abrigos = require("./abrigosRoute.js");
const pets = require("./petsRoute.js");
const adocoes = require("./adocoesRoute.js")

const routes = app => {
    app.use(
        bodyParser.json(),
        abrigos,
        tutores,
        pets,
        adocoes,
    )
}

module.exports = routes;