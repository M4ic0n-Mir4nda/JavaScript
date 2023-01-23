import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    // Expressão regular: \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    // matchAll funciona de acordo com uma string e recebe como parametro uma expressão regular assim retornando um Objeto de string iteravel
    const capturas = [...texto.matchAll(regex)];
                                    //Usar parenteses e duplo colchetes nesses casos na chave para o JS identificar que é a chave de um objeto e não um bloco de código
    const resultados = capturas.map( (captura) => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

function trataErro(erro) {
    //console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
// throw é usado para jogar para fora e tratar os erros no código
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch (erro) {
        //trataErro(erro)
        setInterval(() => trataErro(erro), 2000)
    }
}

/*
funcao assincrona promises com then()

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        // then(entao) encadeia codigos assincronos
        .catch(trataErro)
        // cath(pega) retorna uma funcao com o erro
}
*/

export default pegaArquivo;
