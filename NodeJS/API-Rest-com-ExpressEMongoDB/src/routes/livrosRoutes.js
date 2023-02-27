import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router(); // Usa o roteamento do express

router  // Define a rota e o método que sera executado nela
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;

// Arquivo de rotas: É usado para definir e ter controle qual será o metodo usado nas requisições se vai ser (GET, POST, PUT, DELETE)