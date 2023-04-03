let UsuarioService = require("../services/UsuarioService")

exports.BuscaTodosOsUsuarios = async function (req, res) {
    try {
        var users = await UsuarioService.BuscaUsuariosService(req.body);
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

exports.BuscaUsuarioPorId = async function (req, res) {
    try {
        const user = await UsuarioService.BuscaUsuarioPordIdService(req);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).send("Não encontrado");
    }
}

exports.cadastraUsuario = async function (req, res) {
    try {
        const novoUser = await UsuarioService.cadastraUsuarioService(req);
        return res.status(200).json(novoUser)
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

exports.atualizaDadosUsuario = async function (req, res) {
    try {
        const usuarioAtualizado = await UsuarioService.atualizaDadosUsuarioService(req);
        return res.status(200).json(usuarioAtualizado);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

exports.deletaUsuario = async function (req, res) {
    try {
        const usuarioDeletado = await UsuarioService.deletaUsuarioService(req);
        return res.status(200).json(usuarioDeletado)
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

exports.atua
