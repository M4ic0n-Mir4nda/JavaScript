const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const database = require('../models');
require('dotenv-safe').config();

class TutorRepository {
  static async getAllTutorsRepository() {
    try {
      const tutores = await database.Usuarios.findAll({ where: { role: 'tutor' } });
      if (tutores.length === 0) {
        return {message: 'Não encontrado'};
      }
      return tutores;
    } catch (err) {
      return 'Não encontrado';
    }
  }

  static async getTutoByIdRepository(id) {
    try {
      const user = await database.Usuarios.findOne({
        where: { id: Number(id) },
      });
      return user;
    } catch (err) {
      return 'Não encontrado';
    }
  }

  static async createTutorRepository(dadosTutor) {
    const email = await database.Usuarios.findOne({ where: { email: dadosTutor.email } });

    if (email) {
      return { message: 'Email já cadastrado' };
    }

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(dadosTutor.password, salt);
      dadosTutor.password = hashedPassword;
      const newTutor = await database.Usuarios.create(dadosTutor);
      return newTutor;
    } catch (err) {
      return { message: err.message };
    }
  }

  static async updateTutorRepository(novosDados, idTutor) {
    try {
      await database.Usuarios.update(novosDados, { where: { id: Number(idTutor) } });
      const tutorAtualizado = await database.Usuarios.findOne({ where: { id: Number(idTutor) } });
      return tutorAtualizado;
    } catch (err) {
      return { message: err.message };
    }
  }

  static async deleteTutorRepository(idTutor) {
    try {
      await database.Usuarios.destroy({ where: { id: Number(idTutor) } });
      return `Tutor com id ${idTutor} deletado`;
    } catch (err) {
      return { message: err.message };
    }
  }

  static async validateUserTutorRepository(email, senha) {
    const tutor = await database.Usuarios.findOne({ where: { email, role: 'tutor' } });

    try {
      if (tutor && (await bcrypt.compare(senha, tutor.password))) {
        const token = jwt.sign({ id: tutor.id }, process.env.SECRET, { expiresIn: 300 });
        return { token };
      }
      return { message: 'Login ou senha incorreto' };
    } catch (err) {
      if (tutor === null) {
        return { message: 'Login ou senha incorreto' };
      }
      return { message: err.message };
    }
  }
}

module.exports = TutorRepository;
