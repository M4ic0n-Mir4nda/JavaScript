let PetService = require('../services/PetService');

class PetController {

    static async buscaTodosOsPets(req, res) {
        try {
            var pets = await PetService.BuscaTodosOsPetsService(req.body);
            return res.status(200).json(pets);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}

module.exports = PetController;