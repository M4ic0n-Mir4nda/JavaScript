const { Router } = require('express');
const PetController = require('../api/controllers/PetController');
const RegisterPetValidations = require('../api/validations/RegisterPetValidations');
const router = Router();

router
.get("/pets", PetController.buscaTodosOsPets)
.get("/pet/:id", PetController.BuscaPetPorId)
.post("/pets", RegisterPetValidations.validationBodyRules, RegisterPetValidations.checkRules, PetController.cadastraPet)
.put("/pet/:id", PetController.atualizaDadosPet)
.delete("/pets/:id", PetController.deletaPet)

module.exports = router;