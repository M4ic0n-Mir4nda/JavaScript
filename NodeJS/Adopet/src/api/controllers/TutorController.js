const TutorService = require('../services/TutorService');

class TutorController {

    static async BuscaTutores(req, res) {
        try {
            const tutores = await TutorService.BuscaTutoresService();
            return res.status(200).json(tutores);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async BuscaTutorPorId(req, res) {
        try {
            const tutor = await TutorService.BuscaTutorPorIdService(req);
            return res.status(200).json(tutor)
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async cadastraTutor(req, res) {
        try {
            const novoTutor = await TutorService.cadastraTutorService(req);
            return res.status(200).json(novoTutor);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async atualizaDadosTutor(req, res) {
        try {
            const tutorAtualizado = await TutorService.atualizaDadosTutorService(req);
            return res.status(200).json(tutorAtualizado);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    static async deletaTutor(req, res) {
        try {
            const tutorDeletado = await TutorService.deletaTutorService(req);
            return res.status(200).json(tutorDeletado);
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    }
}

module.exports = TutorController;