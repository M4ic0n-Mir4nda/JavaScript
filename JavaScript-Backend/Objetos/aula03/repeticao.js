const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1155566698', '115523651'],
};

cliente.enderecos = [
    {
        rua: 'R. Joseph Climber',
        numero: 1335,
        apartamento: true,
        complemento: 'Ap 935'
    },
];

for (let i in cliente) {
    let tipo = typeof cliente[i];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${i} tem o valor ${cliente[i]}`)   
    }
};