const notas = [7.5, 10, 9.5, 9, 8.5]
let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
};

let media = soma / notas.length

console.log(media)