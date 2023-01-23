const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros);

const [num1, num2, ...outroNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outroNumeros);

const pessoa = {
    nome: 'Maicon',
    idade: 22
}

const pessoaComTelefone = 
{...pessoa, telefone: 1234893};

console.log(pessoa, pessoaComTelefone);

const {nome} = pessoa;

console.log(nome);

function imprimeDados({ nome, idade }) { 
    console.log(nome, idade);
}

imprimeDados(pessoa);

for (let i in pessoa) {
    console.log(i)
}