const database = require("../models");

class AdocaoRepository {

    static async listaAdocoesRepository() {

        try {
            let adocoes = await database.Adocoes.findAll();
            if (adocoes.length === 0) {
                return {message: "Nenhuma adoção realizada"};
            }
            return adocoes;
        } catch (err) {
            return {message: "Não encontrado"}
        }
    }

    static async processoAdocaoRepository(dadosDaAdocao, pet_id) {
        const { user_id } = dadosDaAdocao;
        const verificaUser = await database.Usuarios.findOne({where: {id: Number(user_id)}});

        try {
            if (verificaUser.role == 'admin') {
                return {message: `user_id: ${user_id} é um abrigo - Apenas tutores podem realizar o processo de adoção`}
            }
            const dadosAdocao = await database.Adocoes.create(dadosDaAdocao);
            await database.Pets.update({ adopted_pet: 1 }, {where: {id: Number(pet_id)}});
            return dadosAdocao;
        } catch (err) {
            if (verificaUser == null) {
                return {message: `user_id: ${user_id} não encontrado`}
            }
            return {message: err.message};
        }
    }
}

module.exports = AdocaoRepository;