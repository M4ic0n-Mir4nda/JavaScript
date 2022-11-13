/* Aula 13 de JS sobre Estruturas de Repeticao */

let carros = ['Fusca', 'Brasília', 'Gurgel']

/* FOR = para faca */
/* i = iterador, interacao ou index */
for (let i = 1 ; i <= 5; i++) {
    document.write(i + " ")
}

for (let i = 5; i >= 1; i--) {
    document.write(i + " ")
}

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

/* FOREACH forEach = para cada */
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

/*
No caso de usare forEach use essa sequencia nos parametros
(fruta, > O elemento que você quer escrever/conteúdo)
( i > E esse é o nome que você vai dar ao indice)
(fruta, i)
*/
document.write('<hr>')
frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

document.write('<hr>')

for (let i in frutas) {
    document.write(`${i} ${frutas[i]} <br>`)
}
document.write('<hr>')

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

/* WHILE enquanto */

// criar variavel de contador fora do laco
let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++ // contador + 1
}
// aqui o contador esta com o valor 5
console.log(contador)

/* DO WHILE faca enquanto */

// criar variavel de contador fora do laco
let iterador = 0

do {
    console.log(carros[iterador])
    iterador++ // contador + 1
} while(iterador < carros.length)

// aqui o iterador esta com o valor 3
console.log(iterador)