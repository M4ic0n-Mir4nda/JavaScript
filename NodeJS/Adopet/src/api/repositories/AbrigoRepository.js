const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const database = require('../models');
require('dotenv-safe').config();

class AbrigoRepository {
  static async getAllAbrigosRepository() {
    try {
      const abrigos = await database.Usuarios.findAll({ where: { role: 'admin' } });
      if (abrigos.length === 0) {
        return {message: 'Não encontrado'};
      }
      return abrigos;
    } catch (err) {
      return 'Não encontrado';
    }
  }

  static async getAbrigoByIdRepository(id) {
    try {
      const abrigo = await database.Usuarios.findOne({
        where: { id: Number(id) },
      });
      return abrigo;
    } catch (err) {
      return 'Não encontrado';
    }
  }

  static async createAbrigoRepository(dadosAbrigo) {
    const email = await database.Usuarios.findOne({ where: { email: dadosAbrigo.email } });

    if (email) {
      return { message: 'Email já cadastrado' };
    }

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(dadosAbrigo.password, salt);
      dadosAbrigo.password = hashedPassword;
      const novoAbrigoCriado = await database.Usuarios.create(dadosAbrigo);
      return novoAbrigoCriado;
    } catch (err) {
      return { message: err.message };
    }
  }

  static async updateAbrigoRepository(novosDados, idAbrigo) {
    try {
      await database.Usuarios.update(novosDados, { where: { id: Number(idAbrigo) } });
      const abrigoAtualizado = await database.Usuarios.findOne({ where: { id: Number(idAbrigo) } });
      return abrigoAtualizado;
    } catch (err) {
      return { message: err.message };
    }
  }

  static async deleteAbrigoRepository(idAbrigo) {
    try {
      await database.Usuarios.destroy({ where: { id: Number(idAbrigo) } });
      return `Abrigo com id ${idAbrigo} deletado`;
    } catch (err) {
      return { message: err.message };
    }
  }

  static async validateUserAbrigoRepository(email, senha) {
    const admin = await database.Usuarios.findOne({ where: { email, role: 'admin' } });

    try {
      const userTrue = await bcrypt.compare(senha, admin.password);
      if (userTrue) {
        const token = jwt.sign({ id: admin.id }, process.env.SECRET, { expiresIn: 300 });
        return { auth: true, token };
      }
      return { message: 'Login ou senha incorreto' };
    } catch (err) {
      if (admin === null) {
        return { message: 'Login ou senha incorreto' };
      }
      return { message: err.message };
    }
  }
}

module.exports = AbrigoRepository;
