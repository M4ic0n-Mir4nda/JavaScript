const AbrigoService = require('../services/AbrigoService');

class AbrigoController {
  static async getAllAbrigos(req, res) {
    try {
      const abrigos = await AbrigoService.getAllAbrigosService();
      return res.status(200).json(abrigos);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getAbrigoById(req, res) {
    try {
      const abrigo = await AbrigoService.getAbrigoByIdService(req);
      return res.status(200).json(abrigo);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async createAbrigo(req, res) {
    try {
      const novoAbrigo = await AbrigoService.createAbrigoService(req);
      return res.status(200).json(novoAbrigo);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async updateAbrigo(req, res) {
    try {
      const abrigoAtualizado = await AbrigoService.updateAbrigoService(req);
      return res.status(200).json(abrigoAtualizado);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async deleteAbrigo(req, res) {
    try {
      const abrigoDeletado = await AbrigoService.deleteAbrigoService(req);
      return res.status(200).json(abrigoDeletado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async validateUserAbrigo(req, res) {
    try {
      const user = await AbrigoService.validateUserAbrigoService(req);
      res.cookie('x-access-token', user.token);
      res.cookie('auth', user.auth);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

module.exports = AbrigoController;
