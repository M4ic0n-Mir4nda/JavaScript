const messageSecret = "alura";

console.log(messageSecret);

function cifraMessage(message, movimentos) {
    const messageCifrada = message.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0); // Pega o código do caractere na posição 0
        return String.fromCharCode( codigoCaractere + movimentos); // Move o codigo para a proxima posição
    });

    return messageCifrada.join('')
};

const messageCrifrada = cifraMessage(messageSecret, 4)

console.log(messageCrifrada);

function decifraMessage(message, movimentos) {
    const messageCifrada = message.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0); // Pega o código do caractere na posição 0
        return String.fromCharCode( codigoCaractere - movimentos); // Move o codigo para a proxima posição
    });

    return messageCifrada.join('')
};

const messageDecifrada = decifraMessage(messageCrifrada, 4)

console.log(messageDecifrada);