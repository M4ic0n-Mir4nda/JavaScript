const AbrigoRepository = require('../repositories/AbrigoRepository')

class AbrigoService {

    static async BuscaAbrigosService() {
        return AbrigoRepository.BuscaAbrigosRepository();
    }

    static async BuscaAbrigoPorIdService(req) {
        const { id } = req.params;

        return AbrigoRepository.BuscaAbrigoPordIdRepository(id);
    }

    static async cadastraAbrigoService(req) {
        const dadosAbrigo = req.body;

        return AbrigoRepository.cadastraAbrigoRepository(dadosAbrigo)
    }

    static async atualizaDadosAbrigoService(req) {
        const { id } = req.params;
        const novosDados = req.body;

        return AbrigoRepository.atualizaDadosAbrigoRepository(novosDados, id)
    }

    static async deletaAbrigoService(req) {
        const { id } = req.params;

        return AbrigoRepository.deletaAbrigoRepository(id);
    }
}

module.exports = AbrigoService;