const {edFolha, edGalho} = require('./livraria');

function listaCompleta(lista1, lista2) {
    const novaLista = [];

    let atualLista1 = 0;
    let atualLista2 = 0;
    let atual = 0

    while (atualLista1 < lista1.length && atualLista2 < lista2.length) {
        
        if (lista1[atualLista1].preco < lista2[atualLista2].preco) {
            novaLista.push(lista1[atualLista1]);
            atualLista1++;
        } else {
            novaLista.push(lista2[atualLista2]);
            atualLista2++;
        }
        
        atual++
    };

    while (atualLista1 < lista1.length) {
        novaLista[atual] = lista1[atualLista1];
        atualLista1++;
        atual++;
    };

    while (atualLista2 < lista2.length) {
        novaLista[atual] = lista1[atualLista2];
        atualLista2++;
        atual++;
    };

    return novaLista;
}

console.log(listaCompleta(edFolha, edGalho))
