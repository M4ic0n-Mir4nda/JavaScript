const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []
            // Transforma a string convertida na função em um objeto para fazer a consulta no array

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener('submit', (event) => {
    const nomeItem = event.target.elements['nome']
    const quantidadeItem = event.target.elements['quantidade']


    // Busca o elemento e verifica se o nome existe, se exister recebe o nome se não undefined
    const existe = itens.find( elemento => elemento.nome === nomeItem.value )
    
    const itemAtual = {
        "nome": nomeItem.value,
        "quantidade": quantidadeItem.value
    }

    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)

        // Busca exatamente o elemento que é exatamente igual ao existe id
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
                        // Se o tamanho do array for 0 cai no false e adiciona 0 se não cai no true
        itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }
    
                                // Transforma o objeto em uma string pois o localStorage só salva textos
    localStorage.setItem("itens", JSON.stringify(itens))

    nomeItem.value = ""
    quantidadeItem.value = ""

    event.preventDefault()
})

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id 
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    // Adiciona um elemento criado pelo JS
    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)

    // Forma simplificada > lista.innerHTML += `<li class="item"><strong>${quantidade}</strong>${nome}</li>`
}

function atualizaElemento(item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = "X";

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}

function deletaElemento(tag, id) {
    // remove o elemento pai do elemento
    tag.remove();
                    // Procura o elemento dentro do array e retorna o index do elemento deletando ele
    itens.splice(itens.findIndex( elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
    
}