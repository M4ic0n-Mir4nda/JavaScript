const clientes = require('./clientes.json');

function filtarApartamentosSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return ( cliente.endereco.apartamento  && 
                            // Confere se o parametro passado tem a propriedade
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtarApartamentosSemComplemento(clientes);

console.log(filtrados)


