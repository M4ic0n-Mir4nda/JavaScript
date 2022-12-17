const listaLivros = require('./livrosDesordenados')

function ordenarLivrosDesordenados(lista) {
    const listaUm = [];
    const listaDois = [];
    const listaTres = [];

    listaUm.push(lista[0], lista[1]);
    listaDois.push(lista[2]);
    listaTres.push(lista[3], lista[4]);

    if (listaUm[0].preco > listaUm[1].preco) {
        let valorAtual = listaUm[0];
        let valorMenor = listaUm[1];

        listaUm[0] = valorMenor;
        listaUm[1] = valorAtual;
    };

    if (listaDois[0].preco < listaUm[0].preco && listaUm[1].preco) {
        let indiceAtual = listaUm[0];
        let indiceMenor = listaUm[1];

        listaUm[0] = listaDois[0];
        listaUm[1] = indiceAtual;
        listaUm[2] = indiceMenor;
    } else {
        listaUm.push(listaDois[0]);
    };

    if (listaTres[0].preco > listaTres[1].preco) {
        let indiceAtual = listaTres[0];
        let indiceMenor = listaTres[1];

        listaTres[0] = indiceMenor;
        listaTres[1] = indiceAtual;
    };

    let atual = 0;
    let atualLista1 = 0;
    let atualLista3 = 0;

    let listaFinal = [];

    while (atualLista1 < listaUm.length && atualLista3 < listaTres.length) {
        if (listaUm[atualLista1].preco < listaTres[atualLista3].preco) {
            listaFinal.push(listaUm[atualLista1]);
            atualLista1++;
        } else {
            listaFinal.push(listaTres[atualLista3]);
            atualLista3++;
        }
        atual++;
    };

    while (atualLista1 < listaUm.length) {
        listaFinal[atual] = listaUm[atualLista1];
        atualLista1++;
        atual++;
    };

    while (atualLista3 < listaTres.length) {
        listaFinal[atual] = listaTres[atualLista3];
        atualLista3++;
        atual++;
    };

    return listaFinal;
}

console.log(ordenarLivrosDesordenados(listaLivros));