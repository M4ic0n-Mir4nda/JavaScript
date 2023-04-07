const database = require("../models")

class AbrigoRepository {

    static async BuscaAbrigosRepository() {

        try {
            let abrigos = await database.Usuarios.findAll({where: {role: 'admin'}});
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
            return err;
        }
    }

    static async atualizaDadosAbrigoRepository(novosDados, idAbrigo) {
        try {
            await database.Usuarios.update(novosDados, {where: {id: Number(idAbrigo)}});
            const abrigoAtualizado = await database.Usuarios.findOne({where: {id: Number(idAbrigo)}});
            return abrigoAtualizado;
        } catch (err) {
            return err;
        }
    }

    static async deletaAbrigoRepository(idAbrigo) {
        try {
            await database.Usuarios.destroy({where: {id: Number(idAbrigo)}});
            return `Abrigo com id ${idAbrigo} deletado`;
        } catch (err) {
            return err;
        }
    }
}

module.exports = AbrigoRepository;