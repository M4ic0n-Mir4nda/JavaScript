const { Router } = require('express');
const PetController = require('../api/controllers/PetController');
const router = Router();

router
.get("/pets", PetController.buscaTodosOsPets)
.get("/pets/:id", PetController.BuscaPetPorId)
.post("/pets", PetController.cadastraPet)
.put("/pets/:id", PetController.atualizaDadosPet)
.delete("/pets/:id", PetController.deletaPet)

module.exports = router;