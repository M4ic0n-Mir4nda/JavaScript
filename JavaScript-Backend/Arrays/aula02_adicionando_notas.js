let notas = [10, 6, 8]
let soma = 0
if (notas.length < 4) {
    notas.push(7)
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
}
let media = soma / notas.length
console.log(media)