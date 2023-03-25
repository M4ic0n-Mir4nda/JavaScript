import express from "express";
import matriculas from "./matriculaRoutes.js";
import alunos from "./alunoRoutes.js"

const routes = (app) => {

    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Lista de Alunos Matriculados"})
    })

    app.use(
        express.json(),
        matriculas,
        alunos
    )
}

export default routes;