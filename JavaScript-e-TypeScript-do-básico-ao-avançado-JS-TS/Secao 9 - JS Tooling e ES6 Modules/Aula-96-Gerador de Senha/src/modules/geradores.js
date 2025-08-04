const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;!@#$%&*[]{}()_-+=^~<>°º';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtde, maisculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtde = Number(qtde);

    for (let i = 0; i < qtde; i++) {
        maisculas ? senhaArray.push(geraMaiscula()) : '';
        minusculas ? senhaArray.push(geraMinuscula()) : '';
        numeros ? senhaArray.push(geraNumero()) : '';
        simbolos ? senhaArray.push(geraSimbolo()) : '';
    }

    return senhaArray.join('').slice(0, qtde);
}