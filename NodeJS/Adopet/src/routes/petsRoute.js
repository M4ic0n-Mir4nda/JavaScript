const { Router } = require('express');
const PetController = require('../api/controllers/PetController');
const router = Router();

router
    .get('/pets', PetController.buscaTodosOsPets)

module.exports = router;