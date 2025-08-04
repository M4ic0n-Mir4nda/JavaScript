// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa 
function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123;
    const metodoInterno = function() {
        return
    };

    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou método');
    };
}

const p1 = new Pessoa('Maicon', 'Miranda'); // Sempre que iniciar uma função construtura utilizar a palavra new e a primeira letra da função Maiuscula
const p2 = new Pessoa('Lucas', 'Andrada');

p2.metodo();

