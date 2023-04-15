const TutorRepository = require('../repositories/TutorRepository');

class TutorService {
  static async getAllTutorsService() {
    return TutorRepository.getAllTutorsRepository();
  }

  static async getTutoByIdService(req) {
    const { id } = req.params;

    return TutorRepository.getTutoByIdRepository(id);
  }

  static async createTutorService(req) {
    const {
      name, email, password, role = 'tutor', profilePictureURL, telephone, about, city,
    } = req.body;
    const dadosTutor = {
      name, email, password, role, profilePictureURL, telephone, about, city,
    };

    return TutorRepository.createTutorRepository(dadosTutor);
  }

  static async updateTutorService(req) {
    const { id } = req.params;
    const novosDados = req.body;

    return TutorRepository.updateTutorRepository(novosDados, id);
  }

  static async deleteTutorService(req) {
    const { id } = req.params;

    return TutorRepository.deleteTutorRepository(id);
  }

  static async validateUserTutorService(req) {
    const { email, password } = req.body;
    return TutorRepository.validateUserTutorRepository(email, password);
  }
}

module.exports = TutorService;
