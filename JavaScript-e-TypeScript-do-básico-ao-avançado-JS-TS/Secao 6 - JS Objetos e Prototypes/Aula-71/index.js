// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)
console.log('#####################')
console.log(Object.keys(p1));
console.log('#####################')
for(let chave in p1) {
    console.log(chave);
}

// defineProperty > define apenas uma

// defineProperties > define varias de umva só vez