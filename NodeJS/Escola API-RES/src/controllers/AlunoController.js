import alunos from "../models/Aluno.js";

class AlunoController {

    static listarAlunos = (req, res) => {
        alunos.find( (err, aluno) => {
            if (err) {
                res.status(404).send({message: err.message});
            } else {
                res.status(200).json(aluno);
            }
        })
    }

    static listarAlunoPorId = (req, res) => {
        const id = req.params.id;

        alunos.findById(id, (err, aluno) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).json(aluno)
            }
        })
    }

    static atualizarAluno = (req, res) => {
        const id = req.params.id;

        alunos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            res.status(200).json("Cadastro de aluno atualizado com sucesso")
        })
    }

    static cadastrarAluno = (req, res) => {
        const aluno = new alunos(req.body);

        aluno.save((err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(201).json(aluno);
            }
        })
    }

    static deletarAluno = (req, res) => {
        const {id} = req.params;

        alunos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send("Cadastro excluido!");
            }
        })
    }
}

export default AlunoController;