const bodyParser = require("body-parser")
const tutores = require("./tutoresRoute.js")

const routes = app => {
    app.use(
        bodyParser.json(),
        tutores
    )
}

module.exports = routes;