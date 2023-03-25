import matriculas from "../models/Matricula.js";

class MatriculaController {

    static listarMatriculados = (req, res) => {
        matriculas.find()
        .populate('aluno')
        .exec((err, matricula) => {
            if (err) {
                res.status(404).send({message: err.message});
            } else {
                res.status(200).json(matricula);
            }
        })
    }

    static listarMatriculadoPorId = (req, res) => {
        const id = req.params.id;

        matriculas.findById(id) 
        .populate('aluno')
        .exec((err, matricula) => {
            if (err) {
                res.status(500).send(`${{message: err.message}} - Id não encontrado`);
            } else {
                res.status(200).json(matricula)
            }
        })
    }

    static atualizarCadastro = (req, res) => {
        const id = req.params.id;

        matriculas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            res.status(200).json("Cadastro atualizado com sucesso")
        })
    }

    static cadastrarMatricula = (req, res) => {
        const matricula = new matriculas(req.body);

        matricula.save((err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(201).json("Matricula efetuada com sucesso.");
            }
        })
    }

    static deletarCadastro = (req, res) => {
        const {id} = req.params;

        matriculas.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send("Cadastro excluido!");
            }
        })
    }

    static buscarSala = (req, res) => {
        const sala = req.query.sala;

        matriculas.find({"sala": sala}, {}, (err, matriculas) => {
            res.status(200).send(matriculas);
        })
    }
}

export default MatriculaController;