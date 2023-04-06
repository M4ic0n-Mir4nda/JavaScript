const database = require('../models');

class PetRepository {

    static async BuscaTodosOsPetsRepository(req) {
        try {
            let pets = await database.Pets.findAll(req)
            return pets;
        } catch (err) {
            return "Não encontrado"
        }
    }
}

module.exports = PetRepository;