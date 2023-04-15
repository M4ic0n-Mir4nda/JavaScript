const PetRepository = require('../repositories/PetRepository');

class PetService {
  static async getAllPetsService(req) {
    const page = req.query.page;
    return PetRepository.getAllPetsRepository(page);
  }

  static async getPetByIdService(req) {
    const { id } = req.params;

    return PetRepository.getPetByIdRepository(id);
  }

  static async createPetService(req) {
    const dadosPet = req.body;

    return PetRepository.createPetRepository(dadosPet);
  }

  static async updatePetService(req) {
    const { id } = req.params;
    const novosDados = req.body;

    return PetRepository.updatePetRepository(novosDados, id);
  }

  static async deletePetService(req) {
    const { id } = req.params;

    return PetRepository.deletePetRepository(id);
  }
}

module.exports = PetService;
