const {Router} = require("express")
const UsuarioController = require("../api/controllers/UsuarioController")
const router = Router()

router
    .get("/tutores", UsuarioController.BuscaTodosOsUsuarios)
    .get("/tutores/:id", UsuarioController.BuscaUsuarioPorId)
    .post("/tutores", UsuarioController.cadastraUsuario)
    .put("/tutores/:id", UsuarioController.atualizaDadosUsuario)
    .delete("/tutores/:id", UsuarioController.deletaUsuario)
    
module.exports = router;