import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"

db.on("Error", console.log.bind(console, "Erro ao iniciar servidor"));
db.once('open', () => {
    console.log("conexão com o banco feita com sucesso")
})


const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Serviço disponivel');
})

app.get('/livros', (req, res) => {
    livros.find((err, livro) => {
        res.json(livro)
    })
})

app.get('/livros/:id', (req, res) => {
    const {id} = req.params;
    const index = buscaLivro(id);
    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    const {id} = req.params;
    const index = buscaLivro(id);
    livros.splice(index, 1);
    res.json("Livro deletado com sucesso")
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

function buscaLivro(id) {
    return livros.findIndex( livro => livro.id == id)
}

export default app;

