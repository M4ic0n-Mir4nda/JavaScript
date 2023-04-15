const TutorService = require('../services/TutorService');

class TutorController {
  static async getAllTutors(req, res) {
    try {
      const tutores = await TutorService.getAllTutorsService();
      return res.status(200).json(tutores);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getTutorById(req, res) {
    try {
      const tutor = await TutorService.getTutoByIdService(req);
      return res.status(200).json(tutor);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async createTutor(req, res) {
    try {
      const novoTutor = await TutorService.createTutorService(req);
      return res.status(200).json(novoTutor);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async updateTutor(req, res) {
    try {
      const tutorAtualizado = await TutorService.updateTutorService(req);
      return res.status(200).json(tutorAtualizado);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async deleteTutor(req, res) {
    try {
      const tutorDeletado = await TutorService.deleteTutorService(req);
      return res.status(200).json(tutorDeletado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async validateUserTutor(req, res) {
    try {
      const user = await TutorService.validateUserTutorService(req);
      res.cookie('x-access-token', user.token);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}

module.exports = TutorController;
