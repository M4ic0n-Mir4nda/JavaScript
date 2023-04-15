import jwt from "jsonwebtoken";

const chaveSecreta = "chaveSuperSecreta" // Pode ser tambem utilizado o random bytes

const token = jwt.sign(
    {
        apelido: "maicao",
        curso: "segurando e node.js"
    }, chaveSecreta
);

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);