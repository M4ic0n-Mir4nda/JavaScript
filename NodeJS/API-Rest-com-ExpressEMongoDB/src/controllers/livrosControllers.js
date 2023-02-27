 import livros from "../models/Livro.js";

class LivroController {
    
    static listarLivros = (req, res) => { // è usado o static para não ser necessario a classe ser instaciada
        livros.find() // é usado o find para buscar todos os livros que o banco tiver
        .populate('autor') // popular o campo autor = busca a referencia do id autor
        .exec((err, livro) => {  
            res.status(200).json(livro);
        })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`});
            } else {
                res.status(200).send(livros);
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrat livro.`})
            } else {
                res.status(201).send(livro.toJSON()) // toJSON() converte para json
            }

        });

    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

              // Localiza pelo ID e atualiza
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Livro atualizado com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        }) 
    }

    static excluirLivro = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Livro removido com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora; // Busca feita por query passando o nome da editora - Ex: http://localhost:3000/livros/busca?editora=Alura

        livros.find({"editora": editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }

}

export default LivroController;

// Arquivo controlador: para ser usado no arquivo de rotas e definir qual é o método que será usado dada a rota que for solicitada no endpoint(URL)