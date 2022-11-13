/*
Exec 01 -
let pessoas = [];
let pes1 = {};
pes1['nome'] = 'João';
pes1.cidade = 'São Paulo'
pessoas.push(pes1);
let pes2 = {};
pes2.nome = 'Jose';
pes2.estado = 'São Paulo';
pessoas.push(pes2)
console.log(pessoas[0].nome);
console.log(pessoas[0]['cidade']);
console.log(pessoas[1]['nome']);
console.log(pessoas[1].cidade);
*/


// Exec 02 - console.log(typeof(2019 + '-' + 09))

/*
Exec 03
let nota = 6
let func;
if (nota >= 6) {
    func = function() {
        return 'Aprovado';
    }
} else if (nota >= 3 && !(nota >= 6)) {
    func = function() {
        return 'Recuperação';
    }
} else {
    func = function() {
        return 'Reprovado';
    }
}
*/


/*
Exec 04
let x = [11, 12, 20, 25, 27, 30];
let y = []
let qtd = 0;
for(let i=0; i < x.length; i++){
    if (x[i] % 2 == 0) {
        qtd++;
        y.push(x[i]);
    }
}
console.log(y);
console.log('<br>')
console.log(qtd);
*/


/*
Exec 05
let numeros = [10, 20, 30];
numeros[0] = 15;
numeros[2] = 35;
numeros[5] = 50;
//numeros[4] = numeros[0] + numeros[1]
console.log(numeros.length)
console.log(numeros[1])
*/

/* 
Exec 06
function funcao(vetor, x) {
    let i=0;
    for (i = 0; i < vetor.length && vetor[i] != x; i = i + 1) { }
    if (i < vetor.length){
        return true;
    } else {
        return false;
    }
}

let pessoas = ['Ana', 'Beatriz', 'Carlos', 'Daniel', 'Eduardo'];
let a = funcao(pessoas, 'Ana');
let b = funcao(pessoas, 'Joao');
let c = funcao(pessoas, 'Eduardo');
let d = funcao(pessoas, 'Fabiana');

console.log(a)
console.log(b)
console.log(c)
console.log(d)
*/

/*
Exec 07
let w = 10;
let x = '10';
let y = 9;
let z = 11;

if (w == x) {
    console.log('a ' + true)
} else if (w === x) {
    console.log('b ' + true)
} else if ((w > y ) && (w > z)) {
    console.log('c ' + true)
} else if ((w > y) || (w > z)) {
    console.log('d ' + true)
}
*/

