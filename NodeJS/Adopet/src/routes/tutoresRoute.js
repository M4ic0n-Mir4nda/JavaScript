const {Router} = require("express");
const TutorController = require("../api/controllers/TutorController");
const RegisterValidations = require('../api/validations/RegisterUserValidations');
const router = Router();

router
    .get("/tutores", TutorController.BuscaTutores)
    .get("/tutores/:id", TutorController.BuscaTutorPorId)
    .post("/tutores", RegisterValidations.validationBodyRules, RegisterValidations.checkRules, TutorController.cadastraTutor)
    .put("/tutores/:id", TutorController.atualizaDadosTutor)
    .delete("/tutores/:id", TutorController.deletaTutor);

    
module.exports = router;