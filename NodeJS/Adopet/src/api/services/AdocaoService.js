const AdocaoRepository = require('../repositories/AdocaoRepository');

class AdocaoService {
  static async getAllAdoptionsService(req) {
    const page = req.query.page;
    return AdocaoRepository.getAllAdoptionsRepository(page);
  }

  static async adoptionProcessService(req) {
    const { pet_id, user_id } = req.body;
    const dadosAdocao = {
      pet_id, user_id,
    };
    return AdocaoRepository.adoptionProcessRepository(dadosAdocao, pet_id);
  }

  static async deleteAdoptionsService(req) {
    const { id } = req.params;

    return AdocaoRepository.deleteAdoptionsRepository(id);
  }
}

module.exports = AdocaoService;
