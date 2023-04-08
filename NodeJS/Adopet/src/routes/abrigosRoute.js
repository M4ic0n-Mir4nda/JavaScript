const {Router} = require("express");
const AbrigoController = require("../api/controllers/AbrigoController");
const RegisterUserValidations = require("../api/validations/RegisterUserValidations");
const router = Router();

router
    .get("/abrigos", AbrigoController.BuscaAbrigos)
    .get("/abrigos/:id", AbrigoController.BuscaAbrigoPorId)
    .post("/abrigos", RegisterUserValidations.validationBodyRules, RegisterUserValidations.checkRules, AbrigoController.cadastraAbrigo)
    .put("/abrigos/:id", AbrigoController.atualizaDadosAbrigo)
    .delete("/abrigos/:id", AbrigoController.deletaAbrigo)
    .delete("/abrigos/adocao/:id", AbrigoController.deletaAdocoes)

module.exports = router;