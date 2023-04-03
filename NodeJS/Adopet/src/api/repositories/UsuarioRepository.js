const database = require("../models")

class UsuarioRepository {
    static async BuscaUsuariosRepository(reqBody) {
        try {
            let users = await database.Usuarios.findAll(reqBody)
            return users;
        } catch (err) {
            return "Não encontrado"
        }
    }
    
    static async BuscaUsuarioPordIdRepository(req) {
        const { id } = req.params
        try {
            let user = await database.Usuarios.findOne({
                where: {id: Number(id)}
            })
            return user;
        } catch (err) {
            return "Não encontrado"
        }
    }

    static async cadastraUsuarioRepository(req) {
        const dadosUsuario = req.body;

        try {
            const novoUsuarioCriado = await database.Usuarios.create(dadosUsuario);
            return novoUsuarioCriado;
        } catch (err) {
            return err;
        }
    }

    static async atualizaDadosUsuarioRepository(req) {
        const { id } = req.params;
        const novosDados = req.body;

        try {
            await database.Usuarios.update(novosDados, {where: {id: Number(id)}});
            const usuarioAtualizado = await database.Usuarios.findOne({
                where: {id: Number(id)}
            });
            return usuarioAtualizado;
        } catch (err) {
            return err;
        }
    }

    static async deletaUsuario(req) {
        const { id } = req.params;

        try {
            await database.Usuarios.destroy({where: {id: Number(id)}});
            return `Usuario com id ${id} deletado`;
        } catch (err) {
            return err;
        }
    }
}

module.exports = UsuarioRepository;
