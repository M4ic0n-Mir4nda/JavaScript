const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaAlunos]

function nomeAluno(nome) {     // includes verifica se o valor está está na lista
    if (listaDeNotasEAlunos[0].includes(nome)) {
                                            // indexOf busca o indice aonde o valor está
        let indice = listaDeNotasEAlunos[0].indexOf(nome)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return 'Aluno não encontrado'
    }
}

console.log(nomeAluno('Ana'))

console.log(nomeAluno('Juliana'))

console.log(nomeAluno('Lucas'))