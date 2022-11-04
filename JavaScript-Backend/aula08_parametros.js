// parâmetros de função

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e tenho ${idade}`
}

console.log(nomeIdade(20, 'Maicon'))

function multiplicacao(n1 = 1, n2 = 1) {
    return n1 * n2
}

console.log(multiplicacao(soma(2, 2)))

function comParametro(param) {
    console.log(param)
}
comParametro()