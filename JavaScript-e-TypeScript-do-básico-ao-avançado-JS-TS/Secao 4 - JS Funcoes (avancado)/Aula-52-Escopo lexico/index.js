const nome = 'Joao';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio'; // variavel é desconsiderada por ja ter sido declarada na função anterior
  falaNome();
}
usaFalaNome();