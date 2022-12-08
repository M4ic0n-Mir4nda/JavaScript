const notas = [8, 6, 7, 5, 10];
let media = 0

if (notas.length > 4) {
    notas.pop()
    for (let i in notas) {
        media += notas[i] / notas.length
    }
}

console.log(`Você ficou com a média final em ${media}`)

