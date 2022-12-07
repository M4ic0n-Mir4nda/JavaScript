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


const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('enderecos')) {
    console.error('Erro. É necessário um endereço cadastrado.')
}