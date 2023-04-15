import { createHash } from 'crypto';

function criaHash(password) {
    return createHash('sha256').update(password).digest('hex');
}

console.log(criaHash("Uma String Qualquer"));

class User {
    constructor(name, password){
        this.name = name;
        this.hash = criaHash(password);
    }

    authentic(name, password) {
        if (name === this.name && this.hash === criaHash(password)) {
            console.log("Usuario autenticado com sucesso!")
            return true;
        }

        console.log("Usuário ou senha incorretos.")
        return false
    }
}

const user = new User('Maicon', 'maicon123');
console.log(user)

// sucesso 
console.log(user.authentic('Maicon', 'maicon123'))

// fracasso
console.log(user.authentic('maicon', 'maicon123'))
console.log(user.authentic('Maicon', 'maicon321'))


// createHash('sha25') > são passados algums parametros e o primeiro é o algortimo criptografico que será usado

// createHash('sha256').update(password) > aqui é passado o metodo update com o parametro recebido da função

// createHash('sha256').update(password).digest('hex') > e por ultimo o tipo de codificação que será apresentada, que nesse caso é hex de hexadecimal

// O método do hash é usado apenas em casos de encriptografia que não é necessário desincriptografar algum dado de volta ou no caso de outra pessoa precisar receber a informação desincriptografada