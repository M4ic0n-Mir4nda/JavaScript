const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['115556669', '115523651'],
};

cliente.enderecos = [
    {
        rua: 'R. Joseph Climber',
        numero: 1335,
        apartamento: true,
        complemento: 'Ap 935'
    },
];

function ligaParaCliente(telComercial, telResidencial) {
    console.log(`Ligando para ${telComercial}`);
    console.log(`Ligando para ${telResidencial}`);
};

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda)