const {Router} = require("express")

const TutorController = require("../controllers/TutorController")
const router = Router()

router
    .get("/tutores", TutorController.buscaTodosOsTutores)

module.exports = router