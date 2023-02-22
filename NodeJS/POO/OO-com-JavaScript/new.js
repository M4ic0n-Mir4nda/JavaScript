function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Maicon', 'm@m.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Maicon', 'm@m.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome;
    }
}

const novoUser = Object.create(user)
novoUser.init('Maicon', 'm@m.com')

console.log(novoUser.exibirInfos())
console.log(user.isPrototypeOf(novoUser)) // true significa que novoUser está recebendo o Prototype(prototipos) do construtor do objeto user