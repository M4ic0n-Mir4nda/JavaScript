// Fazendo requisições de forma assincrona com async wait Obs: O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes: o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.

async function buscaEndereco(cep) {
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        console.log(erro);
    }
}

// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

// O Promise.all ajuda a fazer varias requisições ao mesmo tempo
// Promise.all(conjuntoCeps).then(response => console.log(response));

// Fazendo requisições de forma assincrona com then Obs: O maior problema com callbacks é que eles não são bem dimensionados mesmo para códigos assíncronos moderadamente complexos, onde temos vários .then em seguida do outro. O código resultante geralmente se torna difícil de ler, fácil de quebrar e difícil de depurar. Isso é o que chamamos de callback hell.

// const consultaCep = fetch('https://viacep.com.br/ws/08615090/json/')
//     .then(response => response.json())
//     .then(resp => {
//         if (resp.erro) {
//             throw new Error('Esse cep não existe');
//         } else {
//             console.log(resp);
//         }
//     })
//     .catch(err => console.log(err))
//     .finally(message => console.log('Processamento concluído!'));

// console.log(consultaCep);