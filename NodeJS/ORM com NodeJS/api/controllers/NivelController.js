const database = require("../models");

class NivelController {
    static async pegaTodasOsNiveis(req, res) {
        try {
            const todasOsNiveis = await database.Niveis.findAll();
            return res.status(200).json(todasOsNiveis);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;

        try {                                                       
            const umNivel = await database.Niveis.findOne({ 
                where: { 
              //Id da Coluna - //Id do parametro
                    id: Number(id) 
                }})
            return res.status(200).json(umNivel);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body;

        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel);
            return res.status(201).json(novoNivelCriado);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Niveis.update(novasInfos, {
                where: {
                    id: Number(id)
                }});
            const NivelAtualizada = await database.Niveis.findOne({ 
                where: { 
              //Id da Coluna - //Id do parametro
                    id: Number(id) 
                }})
            return res.status(200).json(NivelAtualizada)
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async apagaNivel(req, res) {
        const { id } = req.params;

        try {
            await database.Niveis.destroy({ where: { id: Number(id) }});
            return res.status(200).json({message: `id ${id} deletado`})
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = NivelController;