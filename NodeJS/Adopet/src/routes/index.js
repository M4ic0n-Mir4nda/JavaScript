const bodyParser = require("body-parser")
const usuarios = require("./tutoresRoute.js")
const pets = require("./petsRoute.js")

const routes = app => {
    app.use(
        bodyParser.json(),
        usuarios,
        pets
    )
}

module.exports = routes;