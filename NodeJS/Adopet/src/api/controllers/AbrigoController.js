const AbrigoService = require('../services/AbrigoService');

class AbrigoController {

    static async BuscaAbrigos(req, res) {
        try {
            const abrigos = await AbrigoService.BuscaAbrigosService();
            return res.status(200).json(abrigos);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async BuscaAbrigoPorId(req, res) {
        try {
            const abrigo = await AbrigoService.BuscaAbrigoPorIdService(req);
            return res.status(200).json(abrigo)
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async cadastraAbrigo(req, res) {
        try {
            const novoAbrigo = await AbrigoService.cadastraAbrigoService(req);
            return res.status(200).json(novoAbrigo);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async atualizaDadosAbrigo(req, res) {
        try {
            const abrigoAtualizado = await AbrigoService.atualizaDadosAbrigoService(req);
            return res.status(200).json(abrigoAtualizado);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async deletaAbrigo(req, res) {
        try {
            const abrigoDeletado = await AbrigoService.deletaAbrigoService(req);
            return res.status(200).json(abrigoDeletado);
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async deletaAdocoes(req, res) {
        try {
            const listaDeAdocoes = await AbrigoService.deletaAdocoesService(req);
            return res.status(200).json(listaDeAdocoes);
        } catch (err) {
            return res.status(500).send({message: err.message});
        }
    }
}

module.exports = AbrigoController;