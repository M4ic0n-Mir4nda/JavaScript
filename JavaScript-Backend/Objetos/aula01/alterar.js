const pessoa = {
    nome: 'Luma',
    profissao: 'Engenheira',
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = '11 2222-4444';

console.log(pessoa.telefone);

pessoa.nome = 'Luma Luiza';

console.log(pessoa);


const NovaPessoa = {
    nome: 'Pedro'
};

// Gera um erro pois não é permitido atribuir numa variavel constante porem é permitido manipular um objeto 
pessoa = NovaPessoa;
