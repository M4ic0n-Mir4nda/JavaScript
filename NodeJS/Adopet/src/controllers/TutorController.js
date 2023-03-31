const database = require("../models")

class TutorController {
    static async buscaTodosOsTutores(req, res) {
        try {
            //const tutores = await database.Tutores.findAll();
            return res.status(200).send("Finalmente consegui")
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = TutorController;