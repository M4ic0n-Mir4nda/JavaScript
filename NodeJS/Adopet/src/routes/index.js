const bodyParser = require("body-parser")
const usuarios = require("./tutoresRoute.js")

const routes = app => {
    app.use(
        bodyParser.json(),
        usuarios
    )
}

module.exports = routes;