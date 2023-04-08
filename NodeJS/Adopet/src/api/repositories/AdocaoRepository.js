const database = require("../models");

class AdocaoRepository {

    static async listaAdocoesRepository() {

        try {
            let adocoes = await database.Adocoes.findAll();
            if (adocoes.length === 0) {
                return "Nenhuma adoção realizada";
            }
            return adocoes;
        } catch (err) {
            return "Não encontrado"
        }
    }

    static async processoAdocaoRepository(dadosDaAdocao, pet_id) {
        try {
            const dadosAdocao = await database.Adocoes.create(dadosDaAdocao);
            await database.Pets.update({ adopted_pet: 1 }, {where: {id: Number(pet_id)}});
            return dadosAdocao;
        } catch (err) {
            return {message: err.message};
        }
    }
}

module.exports = AdocaoRepository;