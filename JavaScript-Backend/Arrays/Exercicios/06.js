const alunos = ['Joao', 'Lucas', 'Maria'];

const notas = [10, 8, 6]

alunos.map( (aluno, nota) => {
    console.log(`${aluno} sua nota foi ${notas[nota]}`)
});