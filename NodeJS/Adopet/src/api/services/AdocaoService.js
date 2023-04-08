const AdocaoRepository = require("../repositories/AdocaoRepository");

class AdocaoService {

    static async listaAdocoesService() {
        return AdocaoRepository.listaAdocoesRepository();
    }

    static async processoAdocaoService(req, res, next) {
        const { pet_id, user_id } = req.body;
        const dadosAdocao = {
            pet_id, user_id
        }
        return AdocaoRepository.processoAdocaoRepository(dadosAdocao, pet_id)
    }
}

module.exports = AdocaoService;