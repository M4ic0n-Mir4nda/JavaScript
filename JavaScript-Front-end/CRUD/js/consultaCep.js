async function validaCep(cep) {
    try {
        const consulta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        const response = await consulta.json();
        if (response.erro) {
            
            campoCep.value += '...   Cep Invalido!'
            campoCep.style.color = 'red'
            setTimeout(function(){
                    campoCep.value = ''
                    campoCep.style.color = 'black'
                 }, 2000)

            throw Error('CEP não existente!');
        }

        campoRua.value = response.logradouro
        campoBairro.value = response.bairro;
        campoCidade.value = response.localidade;
        return response;
    } catch (erro) {
        console.log(erro);
    }
}

function mascaraCep(cep) {
    if (cep.value.length == 5) {
        cep.value = cep.value + '-'
    }
}