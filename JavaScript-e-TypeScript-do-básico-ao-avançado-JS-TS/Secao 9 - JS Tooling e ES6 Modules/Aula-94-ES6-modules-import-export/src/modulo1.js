export const nome = 'Joao';
export const sobrenome = 'Santos';
export const idade = 30;

export function soma(x, y) {
    return x + y;
};

// export default (x, y) => x * y;

// export function soma(x, y) {
//     return x + y;
// };

// export { nome as default, sobrenome, idade, soma };

// export { nome as nome2, sobrenome, idade, soma };

export default class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

