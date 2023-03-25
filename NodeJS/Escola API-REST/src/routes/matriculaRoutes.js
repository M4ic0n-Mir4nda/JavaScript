import express from "express";
import MatriculaController from "../controllers/MatriculaController.js";

const router = express.Router();

router
    .get("/matriculados", MatriculaController.listarMatriculados)
    .get("/matriculados/busca", MatriculaController.buscarSala)
    .get("/matriculados/:id", MatriculaController.listarMatriculadoPorId)
    .put("/matriculados/:id", MatriculaController.atualizarCadastro)
    .post("/matriculados", MatriculaController.cadastrarMatricula)
    .delete("/matriculados/:id", MatriculaController.deletarCadastro)

export default router;