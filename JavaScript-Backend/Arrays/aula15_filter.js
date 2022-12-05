const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']

const notas = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter( (nome, indice) => notas[indice] < 5);
console.log(`Reprovados: ${reprovados}`)