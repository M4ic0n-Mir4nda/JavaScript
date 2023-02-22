import mongoose from "mongoose";

// Cria a base no banco de dados colocando o tipo de cada dado
const livroSchema = new mongoose.Schema(
    {
        id: {type: String },
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPagina: {type: Number}
    }
);

// cria um modelo que corresponde a todos os livros, caso não tenha sido criado no mongoDB ele ira criar automaticamente
const livros = mongoose.model('livros', livroSchema);

export default livros;