let notas = [10, 6.5, 8, 7.5]
let soma = 0

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}
console.log(soma)
console.log(Number(media))