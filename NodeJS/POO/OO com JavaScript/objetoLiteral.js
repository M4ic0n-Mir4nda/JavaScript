const user = {
    nome: 'Maicon',
    email: 'm@m.com',
    nascimento: '2001/05/31',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}
/*
const exibir = function() {
    console.log(this.nome)
}

                        // O bind prende ou segura a execução de uma função ou contexto especifico
const exibirNome = exibir.bind(user)
exibirNome()
exibir()
*/

const admin = {
    nome: 'Maria',
    email: 'm@m.com',
    role: 'admin',
    criaCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criaCurso()
admin.exibirInfos()
