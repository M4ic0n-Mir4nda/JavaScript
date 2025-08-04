const form = document.querySelector('.form');

function calcularImc() {
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const message = document.querySelector('.message');

    if (peso.value == '' || isNaN(Number(peso.value))) {
        message.style.backgroundColor = '#fd4242'
        message.classList.add('message-color');
        message.innerHTML = 'Peso inválido';
    } else if (altura.value == '' || isNaN(Number(altura.value))) {
        message.style.backgroundColor = '#fd4242'
        message.classList.add('message-color');
        message.innerHTML = 'Altura inválida';
    } else {
        message.classList.remove('message-color');
        message.innerHTML = '';

        const imc = Number(peso.value) / (Number(altura.value) * (Number(altura.value)));
        console.log(imc)
        
        if (imc < 18.5) {
            message.style.backgroundColor = '#55F29F';
            message.classList.add('message-color');
            message.innerHTML = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} (Abaixo do peso)`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            message.style.backgroundColor = '#55F29F';
            message.classList.add('message-color');
            message.innerHTML = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} (Peso normal)`;
        } else if (imc >= 25 && imc <= 29.9) {
            message.style.backgroundColor = '#55F29F';
            message.classList.add('message-color');
            message.innerHTML = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} (Sobrepeso)`;
        } else if (imc >= 30 && imc <= 34.9) {
            message.style.backgroundColor = '#55F29F';
            message.classList.add('message-color');
            message.innerHTML = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} (Obesidade grau 1)`;
        } else if (imc >= 35 && imc <= 39.9) {
            message.style.backgroundColor = '#55F29F';
            message.classList.add('message-color');
            message.innerHTML = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} (Obesidade grau 2)`;
        } else if (imc > 40) {
            message.style.backgroundColor = '#55F29F';
            message.classList.add('message-color');
            message.innerHTML = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} (Obesidade grau 3)`;
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcularImc();
})