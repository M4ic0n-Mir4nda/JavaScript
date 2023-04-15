const database = require('../models');

class AdocaoRepository {
  static async getAllAdoptionsRepository(numberPages) {
    try {
      const adocoes = await database.Adocoes.findAll({limit: 10 * parseInt(numberPages)});
      if (adocoes.length === 0) {
        return { message: 'Nenhuma adoção realizada' };
      }
      return adocoes;
    } catch (err) {
      return { message: 'Não encontrado' };
    }
  }

  static async adoptionProcessRepository(dadosDaAdocao, pet_id) {
    const { user_id } = dadosDaAdocao;
    const verificaUser = await database.Usuarios.findOne({ where: { id: Number(user_id) } });
    const verificaPet = await database.Pets.findOne({ where: { adopted_pet: 0, id: Number(pet_id) }, });

    if (!verificaPet) {
      return {message: 'Pet já adotado'}
    }

    try {
      if (verificaUser.role === 'admin') {
        return { message: `user_id: ${user_id} é um abrigo - Apenas tutores podem realizar o processo de adoção` };
      }
      const dadosAdocao = await database.Adocoes.create(dadosDaAdocao);
      await database.Pets.update({ adopted_pet: 1 }, { where: { id: Number(pet_id) } });
      return dadosAdocao;
    } catch (err) {
      if (verificaUser == null) {
        return { message: `user_id: ${user_id} não encontrado` };
      }
      return { message: err.message };
    }
  }

  static async deleteAdoptionsRepository(id) {
    const adocaoEncontrada = await database.Adocoes.findOne({ where: { id: Number(id) } });
    const { pet_id } = adocaoEncontrada;

    try {
      await database.Pets.update({ adopted_pet: 0 }, { where: { id: Number(pet_id) } });
      await database.Adocoes.destroy({ where: { id: Number(id) } });
      return { message: `Adoção ${id} deletada` };
    } catch (err) {
      return { message: `adocao com id ${id} não encontrado` };
    }
  }
}

module.exports = AdocaoRepository;
