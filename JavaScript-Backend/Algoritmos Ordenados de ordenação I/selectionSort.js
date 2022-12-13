const livros = require('./listaLivros');
const ordenarLivros = require('./aula01_Livraria');

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = ordenarLivros(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual
}

console.log(livros)

livros.forEach((_, indice) => {
 let menor = ordenarLivros(livros, indice)

 let livroAtual = livros[indice];
 let livroMenorPreco = livros[menor];

 livros[indice] = livroMenorPreco
 livros[menor] = livroAtual 
})

console.log(livros)



