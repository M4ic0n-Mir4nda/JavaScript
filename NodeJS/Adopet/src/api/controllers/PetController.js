const PetService = require('../services/PetService');

class PetController {
  static async getAllPets(req, res) {
    try {
      const pets = await PetService.getAllPetsService(req);
      return res.status(200).json(pets);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getPetById(req, res) {
    try {
      const pet = await PetService.getPetByIdService(req);
      return res.status(200).json(pet);
    } catch (err) {
      return res.status(500).send('Não encontrado');
    }
  }

  static async createPet(req, res) {
    try {
      const novoPet = await PetService.createPetService(req);
      return res.status(200).json(novoPet);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async updatePet(req, res) {
    try {
      const petAtualizado = await PetService.updatePetService(req);
      return res.status(200).json(petAtualizado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async deletePet(req, res) {
    try {
      const petDeletado = await PetService.deletePetService(req);
      return res.status(200).json(petDeletado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
}

module.exports = PetController;
