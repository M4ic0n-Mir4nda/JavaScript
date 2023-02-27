import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false // Versiona os modelos - Obs: è util em casos de incluir um novo atributo(campo) e verificar que apartir daquela versão de schema esse dado existe
    }
);

const autores = mongoose.model('autores', autorSchema);

export default autores;
