const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista')

form.addEventListener('submit', (event) => {
    criaElemento(event.target.elements['nome'].value, event.target.elements['quantidade'].value)

    event.preventDefault()
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    // Forma simplificada > lista.innerHTML += `<li class="item"><strong>${quantidade}</strong>${nome}</li>`
}