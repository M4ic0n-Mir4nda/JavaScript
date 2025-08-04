//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Unshift adiciona o valor apartir do primeiro parametro passado
nomes.splice(2, 0, 'Luiz', 'Otávio');
console.log(nomes);

// push > adiciona ao final do array
//nomes.splice(nomes.length, 0, 'Maicon')

// Unshift > adicionando no começo do array
//nomes.splice(0, 0, 'Mariana', 'Julia')

// Unshift > trocando valores //
//const removidos = nomes.splice(3, 1, 'Lucas')

// Unshift > trocando valores e excluindo mais de um valor
//const removidos2 = nomes.splice(3, 2, 'Lucas')

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift > remove o primeiro valor do array
// const removidos = nomes.splice(0, 1);