import autores from "../models/Autor.js";

class AutorController {
    
    static listarAutores = (req, res) => { // è usado o static para não ser necessario a classe ser instaciada
        autores.find((err, autor) => {  // é usado o find para buscar todos os Autors que o banco tiver
            res.status(200).json(autor);
        }) 
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Id do Autor não localizado.`});
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrat Autor.`})
            } else {
                res.status(201).send(autor.toJSON()) // toJSON() converte para json
            }

        });

    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

              // Localiza pelo ID e atualiza
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor atualizado com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        }) 
    }

    static excluirAutor = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor removido com sucesso"});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    }

}

export default AutorController;

// Arquivo controlador: para ser usado no arquivo de rotas e definir qual é o método que será usado dada a rota que for solicitada no endpoint(URL)