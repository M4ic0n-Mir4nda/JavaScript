const database = require("../models");

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;

        try {                                                       
            const umaPessoa = await database.Pessoas.findOne({ 
                where: { 
              //Id da Coluna - //Id do parametro
                    id: Number(id) 
                }})
            return res.status(200).json(umaPessoa);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(201).json(novaPessoaCriada);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;