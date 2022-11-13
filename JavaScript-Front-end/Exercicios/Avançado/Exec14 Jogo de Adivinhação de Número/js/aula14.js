let numero      = document.querySelector('#inputNumero')
let btnChutar   = document.querySelector('#btnChutar')
let btnSom      = document.querySelector('#btnSom')
let music      = document.querySelector('#musicaDeFundo')
let aviso       = document.querySelector('#aviso')

btnChutar.addEventListener('click', function() {
    let num = numero.value
    validarNumero(num)
    console.log(num)
})

function jogar(e) {
    btnChutar.disabled = true;
    music.pause()
    e.preventDefault()
}

function validarNumero(numero) {
    let num = numero.value
    if (num < 1 || num > 10) { 
        aviso.textContent = 'Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.'
        aviso.classList.add('alerta')
        setTimeout(function() {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

function musicaFundo() {
    music.play()
}


