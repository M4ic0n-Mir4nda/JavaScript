const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute.js");
const turmas = require('./turmasRoute.js');
const niveis = require('./niveisRoute.js');

const routes = app => {
    app.use(bodyParser.json());
    app.use(
        pessoas,
        turmas,
        niveis   
        );
}

module.exports = routes;