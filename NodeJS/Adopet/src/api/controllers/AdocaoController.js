const AdocaoService = require("../services/AdocaoService");

class AdocaoController {

    static async listaAdocoes(req, res) {
        try {
            const listaDeAdocoes = await AdocaoService.listaAdocoesService();
            return res.status(200).json(listaDeAdocoes);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async processoAdocao(req, res) {
        try {
            const adocaoEfetuada = await AdocaoService.processoAdocaoService(req);
            return res.status(200).json(adocaoEfetuada);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}

module.exports = AdocaoController;