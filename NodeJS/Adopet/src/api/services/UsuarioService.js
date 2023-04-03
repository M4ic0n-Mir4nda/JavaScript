const UsuarioRepository = require("../repositories/UsuarioRepository");

exports.BuscaUsuariosService = async function (req) {
    return UsuarioRepository.BuscaUsuariosRepository(req);
}

exports.BuscaUsuarioPordIdService = async function (req) {
    return UsuarioRepository.BuscaUsuarioPordIdRepository(req);
}

exports.cadastraUsuarioService = async function (req) {
    return UsuarioRepository.cadastraUsuarioRepository(req);
}

exports.atualizaDadosUsuarioService = async function (req) {
    return UsuarioRepository.atualizaDadosUsuarioRepository(req)
}

exports.deletaUsuarioService = async function (req) {
    return UsuarioRepository.deletaUsuario(req)
}