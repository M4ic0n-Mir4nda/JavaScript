const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);
                            // Transforma todo o conteudo em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);
                        // Tenta converter ou "montar" um arquivo JSON e montar um objeto
const objetoCLiente = JSON.parse(clienteEmString);

console.log(objetoCLiente)
console.log(typeof objetoCLiente)


/*
if (dados.nome.length > 0) {
    console.log(`Olá ${dados.nome}, muito prazer`);
} else {
    console.log('Nome não cadastrado')
}
*/