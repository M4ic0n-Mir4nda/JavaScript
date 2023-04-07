const database = require("../models")

class TutorRepository {

    static async BuscaTutoresRepository() {

        try {
            let tutores = await database.Usuarios.findAll({where: {role: 'tutor'}});
            return tutores;
        } catch (err) {
            return "Não encontrado"
        }
    }
    
    static async BuscaTutorPordIdRepository(id) {
        try {
            let user = await database.Usuarios.findOne({
                where: {id: Number(id)}
            })
            return user;
        } catch (err) {
            return "Não encontrado"
        }
    }

    static async cadastraTutorRepository(dadosTutor) {
        try {
            const novoTutorCriado = await database.Usuarios.create(dadosTutor);
            return novoTutorCriado;
        } catch (err) {
            return {message: err.message};
        }
    }

    static async atualizaDadosTutorRepository(novosDados, idTutor) {
        try {
            await database.Usuarios.update(novosDados, {where: {id: Number(idTutor)}});
            const tutorAtualizado = await database.Usuarios.findOne({where: {id: Number(idTutor)}});
            return tutorAtualizado;
        } catch (err) {
            return {message: err.message};
        }
    }

    static async deletaTutorRepository(idTutor) {
        try {
            await database.Usuarios.destroy({where: {id: Number(idTutor)}});
            return `Tutor com id ${idTutor} deletado`;
        } catch (err) {
            return {message: err.message};
        }
    }
}

module.exports = TutorRepository;