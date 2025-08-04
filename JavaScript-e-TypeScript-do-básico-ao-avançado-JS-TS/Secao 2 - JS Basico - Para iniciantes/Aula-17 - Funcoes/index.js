function saudacao(nome) { // function simples
    console.log(`Bom dia ${nome}`);
}

saudacao('Maicon');

function soma(x = 1, y = 1) { // function atribuindo valor default
    return x + y;
}

console.log(soma())

const raiz = function (n) { // variavel com uma function
    return n ** 0.5
};

console.log(raiz(9));

const subtracao = (x, y) =>  x - y // arrow function


console.log(subtracao(10, 5));