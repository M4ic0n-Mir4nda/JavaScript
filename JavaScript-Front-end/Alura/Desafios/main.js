const numeros = document.querySelectorAll('input');

function clickNumero(numero) {
    numero.addEventListener('click', function() {
        console.log(numero.value);
    })
};

clickNumero(numeros[1]);
clickNumero(numeros[2]);
clickNumero(numeros[3]);
clickNumero(numeros[4]);
clickNumero(numeros[5]);
clickNumero(numeros[6]);
clickNumero(numeros[7]);
clickNumero(numeros[8]);
clickNumero(numeros[9]);
clickNumero(numeros[10]);
clickNumero(numeros[11]);
clickNumero(numeros[12]);