const livros = require('./listaLivros')

for (let atual = 0; atual < livros.length; atual++) {
    let menor = 0
    livros.forEach( (item, indice) => {
        if (item.preco < livros[atual].preco) {
            menor = atual
        } else {
            menor = indice
        }
        let valorAtual = livros[atual]
        let valorMenor = livros[menor]
        
        livros[atual] = valorMenor
        livros[menor] = valorAtual
    })
}

console.log(livros)