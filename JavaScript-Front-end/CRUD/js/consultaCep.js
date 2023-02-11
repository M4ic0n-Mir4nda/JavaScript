async function validaCep(cep) {
    try {
        const consulta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        const response = await consulta.json();
        if (response.erro) {
            
            campoCep.value += '...   Cep Inexistente!'
            campoCep.style.color = 'red'
            campoCep.focus()
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
        cep.value = cep.value + '-';
    } else if (cep.value.length === 9 && !isNaN(cep.value)) {
        campoCep.value += '...   Cep Inexistente!'
        campoCep.style.color = 'red'
        campoCep.focus()
        setTimeout(function(){
                campoCep.value = ''
                campoCep.style.color = 'black'
            }, 2000)
    } else if (cep.value.length < 9) {
        campoRua.disabled = true;
        campoCidade.disabled = true;
        campoNumero.disabled = true;

        campoCep.focus()
    } else {
        campoRua.disabled = false;
        campoCidade.disabled = false;
        campoNumero.disabled = false;
    }
}
