const PetRepository = require('../repositories/PetRepository');

class PetService {

    static async BuscaTodosOsPetsService() {
        return PetRepository.BuscaTodosOsPetsRepository();
    }

    static async BuscaPetPordIdService(req) {
        const { id } = req.params;

        return PetRepository.BuscaPetPordIdRepository(id);
    }
    
    static async cadastraPetService(req) {
        const dadosPet = req.body;

        return PetRepository.cadastraPetRepository(dadosPet);
    }
    
    static async atualizaDadosPetService(req) {
        const { id } = req.params;
        const novosDados = req.body;

        return PetRepository.atualizaDadosPetRepository(novosDados, id)
    }
    
    static async deletaPetService(req) {
        const { id } = req.params;

        return PetRepository.deletaPetRepository(id)
    }
}

module.exports = PetService;