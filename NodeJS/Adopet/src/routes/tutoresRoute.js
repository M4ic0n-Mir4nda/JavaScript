const {Router} = require("express")
const TutorController = require("../api/controllers/TutorController")
const userValidate = require('../api/validations/UpdateValidations');
const router = Router()

router
    .get("/tutores", TutorController.BuscaTutores)
    .get("/tutores/:id", TutorController.BuscaTutorPorId)
    .post("/tutores", userValidate.validationBodyRules, userValidate.checkRules, TutorController.cadastraTutor)
    .put("/tutores/:id", TutorController.atualizaDadosTutor)
    .delete("/tutores/:id", TutorController.deletaTutor);

    
module.exports = router;