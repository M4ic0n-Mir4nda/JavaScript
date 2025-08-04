const pessoas = [
    { id: 3, nome: 'Joao'},
    { id: 2, nome: 'Lucas'},
    { id: 1, nome: 'Joana'},
];

// const novasPessoas = {};
// for (const { id, nome } of pessoas) {
//     novasPessoas[id] = { id, nome};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
};

// console.log(novasPessoas.get(2));

// for (const [identifier, { id, nome }] of novasPessoas) {
//     console.log(identifier, id, nome);
// };

// for (const pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// };

novasPessoas.delete(2);
console.log(novasPessoas);