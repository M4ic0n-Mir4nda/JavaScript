const notas = [10, 7, 8, 5, 10]
let soma = 0
notas.pop()
console.log(notas)
for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
let media = soma / notas.length
console.log(media)