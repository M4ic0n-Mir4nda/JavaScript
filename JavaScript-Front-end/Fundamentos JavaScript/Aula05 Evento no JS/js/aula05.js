/* Aula 11 de JS Eventos */

function carregou() {
    console.log('Página carregada com sucesso!')
}

function focou() {
    console.log('Foco no título')
}

function rolorPagina() {
    console.log('Página rolando')
}

function focoNoCampo() {
    console.log('Foco no campo de texto')
}

function semFocoNoCampo() {
    console.log('Saiu o Foco do campo de ')
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover a seta do mouse esta no element
botao1.addEventListener('mouseover', function () {
    console.log('Foco no botao1')
})

// focusout ou blue quando sai o foco
botao2.addEventListener('blur', function () {
    console.log('Foco no botão 2')
})

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault() // Serve para prevenir/não executar o envio padrão que apos clicar em submit fazer o refresh da pagina
    console.log('Clicou no botão Enviar')
})