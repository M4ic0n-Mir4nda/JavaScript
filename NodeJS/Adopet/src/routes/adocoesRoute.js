const { Router } = require("express");
const AdocaoController = require("../api/controllers/AdocaoController");
const AdoptionProcessValidations = require("../api/validations/AdoptionProcessValidations");
const router = Router();

router
    .get("/adocoes", AdocaoController.listaAdocoes)
    .post("/adocao", AdoptionProcessValidations.validationBodyRules, AdoptionProcessValidations.checkRules, AdocaoController.processoAdocao)

module.exports = router;