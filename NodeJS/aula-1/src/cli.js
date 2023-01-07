import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from "./index.js";

const caminho = process.argv; // Valores de argumento - O objeto process captura o que foi passado para a linha de comando para ser usado internamente pelo programa

function imprimeLista(resultado, arquivo = '') {
    console.log(
        chalk.yellow('lista de links'), 
        chalk.blueBright(arquivo),
        resultado);
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
       if (erro.code === 'ENOENT') {
        console.log('arquivo ou diretório não existe');
        return;
       }
    }

        // essa função da lib fs serve para verificar se o argumento passado é um arquivo e retorna true ou false
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado)
        // essa função da lib fs serve para verificar se o argumento passado é um diretorio e retorna true ou false
    } else if (fs.lstatSync(caminho).isDirectory()) {
        // readdir === le o diretorio e é passado como parametro o que está chegando nele
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho);