const TutorRepository = require('../repositories/TutorRepository')

class TutorService {

    static async BuscaTutoresService() {
        return TutorRepository.BuscaTutoresRepository();
    }

    static async BuscaTutorPorIdService(req) {
        const { id } = req.params;

        return TutorRepository.BuscaTutorPordIdRepository(id);
    }

    static async cadastraTutorService(req) {
        const dadosTutor = req.body;

        return TutorRepository.cadastraTutorRepository(dadosTutor)
    }

    static async atualizaDadosTutorService(req) {
        const { id } = req.params;
        const novosDados = req.body;

        return TutorRepository.atualizaDadosTutorRepository(novosDados, id)
    }

    static async deletaTutorService(req) {
        const { id } = req.params;

        return TutorRepository.deletaTutorRepository(id);
    }
}

module.exports = TutorService;