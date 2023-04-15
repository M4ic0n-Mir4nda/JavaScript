import { createHash } from 'crypto';


class User {
    constructor(name, password){
        this.name = name;
        this.hash = this.criaHash(password);
    }
    
    criaHash(password) {
        return createHash('sha256').update(password).digest('hex');
    }
    
    authentic(name, password) {
        if (name === this.name && this.hash === this.criaHash(password)) {
            console.log("Usuario autenticado com sucesso!")
            return true;
        }
        
        //console.log("Usuário ou senha incorretos.")
        return false
    }
}

const user = new User('Maicon', 'senha123');

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.map( senha => {
    if (user.authentic('Maicon', senha)) {
        console.log(`A senha do usuario é ${senha}`);
    }
})
