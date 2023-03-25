const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute.js");

const routes = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
}

module.exports = routes;