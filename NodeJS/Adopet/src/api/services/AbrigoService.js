const AbrigoRepository = require('../repositories/AbrigoRepository');

class AbrigoService {
  static async getAllAbrigosService() {
    return AbrigoRepository.getAllAbrigosRepository();
  }

  static async getAbrigoByIdService(req) {
    const { id } = req.params;

    return AbrigoRepository.getAbrigoByIdRepository(id);
  }

  static async createAbrigoService(req) {
    const {
      name, email, password, role = 'admin', profilePictureURL, telephone, about, city,
    } = req.body;
    const dadosAbrigo = {
      name, email, password, role, profilePictureURL, telephone, about, city,
    };

    return AbrigoRepository.createAbrigoRepository(dadosAbrigo);
  }

  static async updateAbrigoService(req) {
    const { id } = req.params;
    const novosDados = req.body;

    return AbrigoRepository.updateAbrigoRepository(novosDados, id);
  }

  static async deleteAbrigoService(req) {
    const { id } = req.params;

    return AbrigoRepository.deleteAbrigoRepository(id);
  }

  static async validateUserAbrigoService(req) {
    const { email, password } = req.body;
    return AbrigoRepository.validateUserAbrigoRepository(email, password);
  }
}

module.exports = AbrigoService;
