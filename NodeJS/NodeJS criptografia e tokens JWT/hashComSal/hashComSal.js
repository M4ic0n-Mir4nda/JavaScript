import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(password) {
    // O ramdonBytes simplesmente você da um tamanho e ele retorna um uma quantidade de bytes que cabe naquele tamanho e apos isso é codificado em formato de hexadecimal
    const sal = randomBytes(16).toString('hex');

     // No scryptSync vc passa como parametro a senha mais o "sal" para gerar um hash mais complexo e um número que será o tamanho da senha que será criada, lembrando que sempre será um hash diferente do outro
    const senhaHasheada = scryptSync(password, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`
}

class User {
    constructor(name, password) {
        this.name = name;
        [this.sal, this.hash] = criaHashComSal(password).split(':') // Aqui você descontroi os valores e passa cada um para um campo. O split é usado pois como é recebida dois valores no construtor, é feito isso para definir que nos 2 pontos vai ser feita a separação delas
    }

    authentic(name, password) {
        if (name === this.name){
            const testHash = scryptSync(password, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex') // Checa a hash armazenada é verifica se condiz com a hash passada

            const hashesCorrespondem = timingSafeEqual(testHash, hashReal) // Faz o comparativo das duas variaveis com as hashes

            if (hashesCorrespondem) {
                console.log('Usuario autenticado com sucesso!');
                return true;
            }
        }
        console.log('Usuario ou senha incorretos.')
        return false;
    }
}

const user = new User('Maicon', 'maicon123');

console.log(user);

// sucesso
console.log(user.authentic('Maicon', 'maicon123'));

// fracasso
console.log(user.authentic('Maicon', 'maicon321'));
console.log(user.authentic('maicon', 'maicon123'));

// O método do hash é usado apenas em casos de encriptografia que não é necessário desincriptografar algum dado de volta ou no caso de outra pessoa precisar receber a informação desincriptografada