const PetRepository = require('../repositories/PetRepository');

class PetService {

    static async BuscaTodosOsPetsService(req) {
        return PetRepository.BuscaTodosOsPetsRepository(req);
    } 
}

module.exports = PetService;