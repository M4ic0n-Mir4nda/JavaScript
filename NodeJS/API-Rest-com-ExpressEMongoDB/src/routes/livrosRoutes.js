import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router(); // Usa o roteamento do express

router
    .get("/livros", LivroController.listarLivros) // Define a rota e o método que sera executado nela
    .post("/livros", LivroController.cadastrarLivro)

export default router;

// Arquivo de rotas: É usado para definir e ter controle qual será o metodo usado nas requisições se vai ser (GET, POST, PUT, DELETE)