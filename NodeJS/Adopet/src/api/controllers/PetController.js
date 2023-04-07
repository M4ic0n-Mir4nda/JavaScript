let PetService = require('../services/PetService');

class PetController {

    static async buscaTodosOsPets(req, res) {
        try {
            var pets = await PetService.BuscaTodosOsPetsService();
            return res.status(200).json(pets);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async BuscaPetPorId(req, res) {
        try {
            const pet = await PetService.BuscaPetPordIdService(req);
            return res.status(200).json(pet);
        } catch (err) {
            return res.status(500).send("Não encontrado");
        }
    }
    
    static async cadastraPet(req, res) {
        try {
            const novoPet = await PetService.cadastraPetService(req);
            return res.status(200).json(novoPet)
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    }
    
    static async atualizaDadosPet(req, res) {
        try {
            const petAtualizado = await PetService.atualizaDadosPetService(req);
            return res.status(200).json(petAtualizado);
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }
    
    static async deletaPet(req, res) {
        try {
            const petDeletado = await PetService.deletaPetService(req);
            return res.status(200).json(petDeletado)
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    }
}

module.exports = PetController;