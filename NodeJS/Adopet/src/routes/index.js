const bodyParser = require("body-parser")
const tutores = require("./tutoresRoute.js")
const pets = require("./petsRoute.js")
const abrigos = require('./abrigosRoute.js');

const routes = app => {
    app.use(
        bodyParser.json(),
        abrigos,
        tutores,
        pets,
    )
}

module.exports = routes;