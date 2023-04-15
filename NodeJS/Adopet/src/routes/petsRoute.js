const { Router } = require('express');
const PetController = require('../api/controllers/PetController');
const RegisterPetValidations = require('../api/validations/RegisterPetValidations');

const router = Router();

router
  .get('/pets', PetController.getAllPets)
  .get('/pet/:id', PetController.getPetById)
  .post('/pets', RegisterPetValidations.validationBodyRules, RegisterPetValidations.checkRules, PetController.createPet)
  .put('/pet/:id', PetController.updatePet)
  .delete('/pets/:id', PetController.deletePet);

module.exports = router;
