import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
});

const app = express();

app.use(express.json()); // Um recurso do express que faz a interpretação do que chega via postman e transforma o dado em um objeto para manipular

routes(app);

// const livros = [
//     {id: 1, "titulo": "Senhor dos Anéis"},
//     {id: 2, "titulo": "O Hobiit"}
// ];

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params; // Busca o id via desestruturação
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;