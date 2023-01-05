import chalk from 'chalk'
import pegaArquivo from "./index.js";

const caminho = process.argv; // Valores de argumento - O objeto process captura o que foi passado para a linha de comando para ser usado internamente pelo programa

async function processaTexto(caminho) {
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('Lista de links'), resultado);
}

processaTexto(caminho)