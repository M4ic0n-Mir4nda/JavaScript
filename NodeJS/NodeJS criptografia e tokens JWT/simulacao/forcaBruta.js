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

const user = new User('Maicon', '1337');

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    if (user.authentic("Maicon", senhaTeste.toString())) {
        console.log(`A senha do usuario é ${senhaTeste}`);
    };
};


