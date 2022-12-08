const alunos = ['Joana', 'Luzia', 'Lucas', 'Larissa'];
const notas = [10, 5, 8, 9];

function verificarAluno(nome) {
    if (alunos.includes(nome)) {
        let indice = alunos.indexOf(nome)
        return `${nome}, sua média final é ${notas[indice]}`;
    } else {
        return 'Aluno não escontrado';
    }
};

console.log(verificarAluno('Luzia'));

console.log(verificarAluno('Lucas'));

console.log(verificarAluno('Nathalia'))