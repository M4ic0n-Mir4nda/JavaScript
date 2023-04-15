const AdocaoService = require('../services/AdocaoService');

class AdocaoController {
  static async getAllAdoptions(req, res) {
    try {
      const listaDeAdocoes = await AdocaoService.getAllAdoptionsService(req);
      return res.status(200).json(listaDeAdocoes);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async adoptionProcess(req, res) {
    try {
      const adocaoEfetuada = await AdocaoService.adoptionProcessService(req);
      return res.status(200).json(adocaoEfetuada);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async deleteAdoptions(req, res) {
    try {
      const adocaoDeletada = await AdocaoService.deleteAdoptionsService(req);
      return res.status(200).send(adocaoDeletada);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

module.exports = AdocaoController;
