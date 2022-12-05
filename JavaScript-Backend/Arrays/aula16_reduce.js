const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala( notasSala ) {
    const somaDasNotas = notasSala.reduce( (acum, atual) => acum + atual, 0)
    return somaDasNotas / notasSala.length    
}

console.log(`Sala JS: ${mediaSala(salaJS)}`)
console.log(`Sala Java: ${mediaSala(salaJava)}`)
console.log(`Sala Python: ${mediaSala(salaPython)}`)

// -----------------------------

let notas = [10, 6.5, 8, 7.5]

const mediaFinal = notas.reduce( (acum, atual) => acum + atual, 0) / notas.length

console.log(mediaFinal)

