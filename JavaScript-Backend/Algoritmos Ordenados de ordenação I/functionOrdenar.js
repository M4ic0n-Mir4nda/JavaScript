function ordenarLivros(livros, posicaoInicial) {
    let maisBaratos = posicaoInicial;

    for (let atual = posicaoInicial; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[maisBaratos].preco) {
            maisBaratos = atual
        }
    }
    return maisBaratos;
};

module.exports = ordenarLivros;