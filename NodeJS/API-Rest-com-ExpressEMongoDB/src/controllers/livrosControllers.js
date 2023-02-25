import livros from "../models/Livro.js";

class LivroController {
    
    static listarLivros = (req, res) => { // è usado o static para não ser necessario a classe ser instaciada
        livros.find((err, livro) => {  // é usado o find para buscar todos os livros que o banco tiver
            res.status(200).json(livro);
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

}

export default LivroController;

// Arquivo controlador: para ser usado no arquivo de rotas e definir qual é o método que será usado dada a rota que for solicitada no endpoint(URL)