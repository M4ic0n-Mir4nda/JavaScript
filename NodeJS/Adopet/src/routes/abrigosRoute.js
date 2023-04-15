const { Router } = require('express');
const AbrigoController = require('../api/controllers/AbrigoController');
const RegisterUserValidations = require('../api/validations/RegisterUserValidations');

const router = Router();

router
  .get('/abrigos', AbrigoController.getAllAbrigos)
  .get('/abrigos/:id', AbrigoController.getAbrigoById)
  .post('/abrigos', RegisterUserValidations.validationBodyRules, RegisterUserValidations.checkRules, AbrigoController.createAbrigo)
  .post('/abrigos/login', AbrigoController.validateUserAbrigo)
  .post('/abrigos/logout', (req, res) => {
    res.clearCookie('x-access-token');
    res.clearCookie('auth');
    res.status(200).redirect('/');
  })
  .put('/abrigos/:id', AbrigoController.updateAbrigo)
  .delete('/abrigos/:id', AbrigoController.deleteAbrigo);

module.exports = router;
