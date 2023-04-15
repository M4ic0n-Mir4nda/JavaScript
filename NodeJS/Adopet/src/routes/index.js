const express = require("express")
const cookieParser = require('cookie-parser');
const tutores = require("./tutoresRoute.js");
const abrigos = require("./abrigosRoute.js");
const pets = require("./petsRoute.js");
const adocoes = require("./adocoesRoute.js");

const routes = app => {
    app.route("/").get((req, res) => {
        res.status(200).send({message: 'Bem-vindo ao Adopet!'})
    })
    app.use(
        express.json(),
        cookieParser(),
        abrigos,
        tutores,
        pets,
        adocoes,
    )
};

module.exports = routes;