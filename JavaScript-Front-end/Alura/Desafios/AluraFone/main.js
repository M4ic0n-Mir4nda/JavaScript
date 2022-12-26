let numeros = document.querySelectorAll('input[type=button]');
let input = document.querySelector('input[type=tel]')

function clickNumero(numero) {
    numero.addEventListener('click', function() {
        input.value += numero.value
    })
    numero.onkeydown = function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            numero.classList.add('ativa')
        }
    }
    numero.onkeyup = function() {
        numero.classList.remove('ativa')
    }    
};

for (let atual = 0; atual < numeros.length; atual++) {
    clickNumero(numeros[atual]);
};