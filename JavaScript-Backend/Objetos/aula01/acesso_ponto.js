const cliente = {
    nome: 'Andre',
    idade: 34,
    cpf: '1234589',
    email: 'andre@dominio.com'
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros do cpf são ${cliente.cpf.substring(0, 3)}`);