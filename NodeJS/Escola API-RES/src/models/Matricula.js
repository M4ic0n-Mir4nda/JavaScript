import mongoose from "mongoose";

const matriculaSchema = new mongoose.Schema(
    {
        id: {type: String},
        matricula: {type: Boolean, required: true},
        sala: {type: String, required: true},
        aluno: {type: mongoose.Schema.Types.ObjectId, ref: "alunos", required: true},
    },
    {
        versionKey: false
    }
)

let matriculas = mongoose.model("matriculas", matriculaSchema);

export default matriculas;