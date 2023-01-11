import chalk from "chalk";

function extraiLinks(arrLinks) {
    return arrLinks.map((link) => Object.values(link).join());
}

async function checaStatus(listaURLs) {
    const arrayStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try {
                                // o fetch faz a requisição e retorna um objeto promessa
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`;
            } catch (erro) {
                return manejaErros(erro);
            }
        })
    )
    return arrayStatus;
}

function manejaErros(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

export default listaValidada;

