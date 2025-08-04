const pessoa = {
    nome: 'Maicon',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
      rua: 'Av Brasil',
      numero: 320
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto } = pessoa;
  console.log(nome, resto);