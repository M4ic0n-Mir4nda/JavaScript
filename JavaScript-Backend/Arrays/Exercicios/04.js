const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daise', 'Camilo'];

const salaA = nomes.slice(0, nomes.length / 2);
const salaB = nomes.slice(nomes.length / 2);

console.log(`Sala A: ${salaA}`);
console.log(`Sala B: ${salaB}`);