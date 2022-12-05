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

cliente.enderecos.push({
    rua: 'R. Joseph Ladder',
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter( (endereco) => 
    endereco.apartamento === true
);

console.log(listaApenasApartamentos)
