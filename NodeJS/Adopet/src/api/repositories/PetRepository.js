const database = require('../models');

class PetRepository {

    static async BuscaTodosOsPetsRepository() {
        try {
            let pets = await database.Pets.findAll({where: { adopted_pet: 0 }})
            if (pets.length === 0) {
                return "Não encontrado"
            }
            return pets;
        } catch (err) {
            return "Não encontrado"
        }
    }

    static async BuscaPetPordIdRepository(id) {
        try {
            let pet = await database.Pets.findOne({
                where: {id: Number(id)}
            })
            return pet;
        } catch (err) {
            return "Não encontrado"
        }
    }

    static async cadastraPetRepository(dadosPet) {
        const { user_id } = dadosPet;
        const verificaUser = await database.Usuarios.findOne({where: {id: Number(user_id)}});

        try {
            if (verificaUser.role == 'tutor') {
                return {message: "Não é possivel associar um tutor para um cadastro de pet, apenas abrigos podem ser associados a um novo pet"};
            }
            const novoPetCriado = await database.Pets.create(dadosPet);
            return novoPetCriado;
        } catch (err) {
            if (verificaUser === null) {
                return {message: `user_id: ${user_id} não encontrado`}
            }
            return {message: err.message};
        }
    }

    static async atualizaDadosPetRepository(novosDados, idPet) {
        try {
            await database.Pets.update(novosDados, {where: {id: Number(idPet)}});
            const petAtualizado = await database.Pets.findOne({where: {id: Number(idPet)}});
            return petAtualizado;
        } catch (err) {
            return {message: err.message};
        }
    }

    static async deletaPetRepository(idPet) {
        try {
            await database.Pets.destroy({where: {id: Number(idPet)}});
            return `Pet com id ${idPet} deletado`;
        } catch (err) {
            return {message: err.message};
        }
    }
}

module.exports = PetRepository;