import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) => {
    // O método route define o que acontece na roda que for definidado nele. Obs: é recomendado usar em casos de mensagens básicas, em casos de processos mais complexos usar formas de rotas por arquivos
    app.route('/').get((req , res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes;

// Arquivo que é usada para concentrar todas as rotas que serão utilizadas na aplicação, assim não poluindo e deixando o arquivo app.js mais legivel e organizado