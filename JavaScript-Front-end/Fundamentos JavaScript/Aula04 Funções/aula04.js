let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelector('box')

/*  Funcoes sem parametros e sem retorno são chamados (procedure) */
function olaMundo() {
    document.write('Olá Mundo sem retorno <br>')
}

/*  Funcoes sem parametros e com retorno (function) */ 
function olaMundo2() {
    return 'Olá Mundo com retorno <br>'
}

//  CHAMAR A FUNCAO = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

/*  Funcoes com parametros e sem retorno são chamados (procedure) */ 

function somar(a=0, b=0) {
    document.write(a + b + '<br>')
}

function somar2(c, d) {
    return c + d
}

//  CHAMAR A FUNCAO = executar ela
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

/* 
    Funcao anonima = nao tem nome 
    pode ou nao ter parametros
    pode ou nao ter retorno
*/

titulo.addEventListener('click', function() {
    console.log('Clicou no título')
})

/* Arrow Functions ES6 2015 em diante */

/* 
    Você cria uma const ou um let que recebe oq seria o nome da função e não é necessario passar um nome para a função, caso você queira passar parametros é so colocar dentro dos paratenses caso contrario não pe obrigatório, e apos os () os sinais de => que significa a 'flecha' de (ArrowFunction), a chave no final vai depender de quantos ações forem passadas. Caso você passar somente uma ação não é necessário abrir chaves caso contrário é sim necessário usar as chaves
    const nomeFuncao = () =>
*/

const olaMundoArrow = () => document.write('Ola Mundo!!!!!')

//  não precisa usar a palavra function
//  não precisa usar a palavra return
//  não se usa nome na funcao
//  nao precisa colocar { } se for so uma instrução

const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'


olaMundoArrow()
document.write(olaMundo2Arrow())
