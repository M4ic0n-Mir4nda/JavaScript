import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router(); // Usa o roteamento do express

router  // Define a rota e o método que sera executado nela
    .get("/autores", AutorController.listarAutores) 
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)

export default router;

// Arquivo de rotas: É usado para definir e ter controle qual será o metodo usado nas requisições se vai ser (GET, POST, PUT, DELETE)