const database = require("../models")

class AbrigoRepository {

    static async BuscaAbrigosRepository() {

        try {
            let abrigos = await database.Usuarios.findAll({where: { role: 'admin' }});
            return abrigos;
        } catch (err) {
            return "Não encontrado"
        }
    }
    
    static async BuscaAbrigoPordIdRepository(id) {
        try {
            let abrigo = await database.Usuarios.findOne({
                where: {id: Number(id)}
            })
            return abrigo;
        } catch (err) {
            return "Não encontrado"
        }
    }

    static async cadastraAbrigoRepository(dadosAbrigo) {
        try {
            const novoAbrigoCriado = await database.Usuarios.create(dadosAbrigo);
            return novoAbrigoCriado;
        } catch (err) {
            return {message: err.message};
        }
    }

    static async atualizaDadosAbrigoRepository(novosDados, idAbrigo) {
        try {
            await database.Usuarios.update(novosDados, {where: {id: Number(idAbrigo)}});
            const abrigoAtualizado = await database.Usuarios.findOne({where: {id: Number(idAbrigo)}});
            return abrigoAtualizado;
        } catch (err) {
            return {message: err.message};
        }
    }

    static async deletaAbrigoRepository(idAbrigo) {
        try {
            await database.Usuarios.destroy({where: {id: Number(idAbrigo)}});
            return `Abrigo com id ${idAbrigo} deletado`;
        } catch (err) {
            return {message: err.message};
        }
    }

    static async deletaAdocoesRepository(id) {
        const adocaoEncontrada = await database.Adocoes.findOne({where: {id: Number(id)}});
        const { pet_id } = adocaoEncontrada;
        
        try {
           await database.Pets.update({ adopted_pet: 0 }, {where: {id: Number(pet_id)}});
           await database.Adocoes.destroy({where: {id: Number(id)}});
           return `Adoção ${id} deletada`;
        } catch (err) {
            return {message: `adocao com id ${id} não encontrado`};
        }
    }
}

module.exports = AbrigoRepository;