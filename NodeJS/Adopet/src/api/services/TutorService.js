const TutorRepository = require('../repositories/TutorRepository')
const { validationResult } = require('express-validator/check')

class TutorService {

    static async BuscaTutoresService() {
        return TutorRepository.BuscaTutoresRepository();
    }

    static async BuscaTutorPorIdService(req) {
        const { id } = req.params;

        return TutorRepository.BuscaTutorPordIdRepository(id);
    }

    static async cadastraTutorService(req) {
        const { name, email, password, role = 'tutor', profilePictureURL, telephone, about, city } = req.body
        const dadosTutor = {
            name, email, password, role, profilePictureURL, telephone, about, city
        }

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