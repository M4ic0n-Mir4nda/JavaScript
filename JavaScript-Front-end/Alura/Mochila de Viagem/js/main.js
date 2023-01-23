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

    const existe = itens.find( elemento => elemento.nome === nomeItem.value )
    
    const itemAtual = {
        "nome": nomeItem.value,
        "quantidade": quantidadeItem.value
    }

    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length

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

    lista.appendChild(novoItem)

    // Forma simplificada > lista.innerHTML += `<li class="item"><strong>${quantidade}</strong>${nome}</li>`
}

function atualizaElemento(item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}