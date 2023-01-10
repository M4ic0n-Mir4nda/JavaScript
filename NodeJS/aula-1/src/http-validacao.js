function extraiLinks(arrLinks) {
    return arrLinks.map((link) => Object.values(link).join());
}

async function checaStatus(listaURLs) {
    const arrayStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
                                // o fetch faz a requisição e retorna um objeto promessa
            const response = await fetch(url)
            return response.status;
        })
    )
    return arrayStatus;
}

async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    return status;
}

export default listaValidada;

//[gatinho salsicha](http://gatinhosalsicha.com.br/)
