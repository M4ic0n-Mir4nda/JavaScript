const { Router } = require('express');
const AdocaoController = require('../api/controllers/AdocaoController');
const AdoptionProcessValidations = require('../api/validations/AdoptionProcessValidations');
const auth = require('../api/middleware/auth');

const router = Router();

router
  .get('/adocoes', AdocaoController.getAllAdoptions)
  .post('/adocao', AdoptionProcessValidations.validationBodyRules, AdoptionProcessValidations.checkRules, AdocaoController.adoptionProcess)
  .use(auth)
  .delete('/adocao/:id', AdocaoController.deleteAdoptions);

module.exports = router;
