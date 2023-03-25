import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String},
        idade: {type: Number}
    },
    {
        versionKey: false
    }
);

const alunos = mongoose.model("alunos", alunoSchema);

export default alunos;