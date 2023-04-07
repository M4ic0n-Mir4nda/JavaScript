const {Router} = require("express");
const AbrigoController = require("../api/controllers/AbrigoController");
const userValidate = require("../api/validations/UpdateValidations");
const router = Router();

router
    .get("/abrigos", AbrigoController.BuscaAbrigos)
    .get("/abrigos/:id", AbrigoController.BuscaAbrigoPorId)
    .post("/abrigos", userValidate.validationBodyRules, userValidate.checkRules, AbrigoController.cadastraAbrigo)
    .put("/abrigos/:id", AbrigoController.atualizaDadosAbrigo)
    .delete("/abrigos/:id", AbrigoController.deletaAbrigo)

module.exports = router;