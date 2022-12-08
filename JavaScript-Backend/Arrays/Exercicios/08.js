const nomes = ['Luzia', 'Lucas', 'Maicon', 'Larissa'];

const notas = [5, 4.5, 3, 8];

const reprovados = nomes.filter( (aluno, nota) => notas[nota] < 5)

console.log(`Os alunos reprovados foram ${reprovados}`)