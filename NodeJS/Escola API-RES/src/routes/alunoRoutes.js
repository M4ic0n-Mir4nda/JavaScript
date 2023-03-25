import express from "express";
import AlunoController from "../controllers/AlunoController.js";

const router = express.Router();

router
    .get("/alunos", AlunoController.listarAlunos)
    .get("/alunos/:id", AlunoController.listarAlunoPorId)
    .put("/alunos/:id", AlunoController.atualizarAluno)
    .post("/alunos", AlunoController.cadastrarAluno)
    .delete("/alunos/:id", AlunoController.deletarAluno)

export default router;