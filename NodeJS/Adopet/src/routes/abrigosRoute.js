const {Router} = require("express")
const AbrigoController = require("../api/controllers/AbrigoController")
const router = Router()

router
    .get("/abrigos", AbrigoController.BuscaAbrigos)
    .get("/abrigos/:id", AbrigoController.BuscaAbrigoPorId)
    .post("/abrigos", AbrigoController.cadastraAbrigo)
    .put("/abrigos/:id", AbrigoController.atualizaDadosAbrigo)
    .delete("/abrigos/:id", AbrigoController.deletaAbrigo)

module.exports = router;