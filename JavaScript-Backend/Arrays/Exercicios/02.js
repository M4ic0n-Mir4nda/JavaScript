const notas = [8, 10, 7];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
};

if (soma / notas.length < 5) {
    notas.push(10);
    let soma = 0;
    for (let nota in notas) {
        soma += notas[nota]
    };
    const media = soma / notas.length
    console.log(media)
} else {
    console.log('Você foi aprovado!')
}



