const { Router } = require('express');
const TutorController = require('../api/controllers/TutorController');
const RegisterValidations = require('../api/validations/RegisterUserValidations');

const router = Router();

router
  .get('/tutores', TutorController.getAllTutors)
  .get('/tutores/:id', TutorController.getTutorById)
  .post('/tutores', RegisterValidations.validationBodyRules, RegisterValidations.checkRules, TutorController.createTutor)
  .post('/tutores/logout', (req, res) => {
    res.clearCookie('x-access-token');
    res.clearCookie('auth');
    res.status(200).redirect('/');
  })
  .post('/tutores/login', TutorController.validateUserTutor)
  .put('/tutores/:id', TutorController.updateTutor)
  .delete('/tutores/:id', TutorController.deleteTutor);

module.exports = router;
