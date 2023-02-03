const form = document.querySelector('#form');
const tabela = document.querySelector('#tabela');
const divTabela = document.querySelector('#cadastrados')
const cadastrados = JSON.parse(localStorage.getItem('cadastrados')) || []

cadastrados.forEach( (elemento) => {
    criaElemento(elemento)
})

// let tr = tabela.getElementsByTagName('tr');

// if (tr.length > 2) {
//     divTabela.style.display = 'block'
// } 

form.addEventListener('submit', (e) => {

    const nome = e.target.elements['nome'];
    const contato = e.target.elements['contato'];
    const cep = e.target.elements['cep'];
    const rua = e.target.elements['rua'];
    const complemento = e.target.elements['complemento'];
    const numero = e.target.elements['numero'];
    const cidade = e.target.elements['cidade']

    const pessoa = {
        "nome": nome.value,
        "contato": contato.value,
        "cep": cep.value,
        "rua": rua.value,
        "complemento": complemento.value,
        "numero": numero.value,
        "cidade": cidade.value
    }

    const existe = cadastrados.find( elemento => elemento.nome === pessoa.nome)

    if (existe) {
        alert('Usúario ja cadastrado')
    } else {
        pessoa.id = cadastrados.length
        criaElemento(pessoa)

        cadastrados.push(pessoa)

        nome.value = ''
        contato.value = ''
        cep.value = ''
        rua.value = ''
        complemento.value = ''
        numero.value = ''
        cidade.value = ''
        
    }

    localStorage.setItem("cadastrados", JSON.stringify(cadastrados))

    e.preventDefault()
})

function criaElemento(item) {
    const novaColuna = document.createElement('tr')
    
    const elementoNome = document.createElement('td');
    const elementoContato = document.createElement('td');
    const elementoIdade = document.createElement('td');
    const elementoCep = document.createElement('td');
    const elementoRua = document.createElement('td');
    const elementoComplemento = document.createElement('td');
    const elementoNumero = document.createElement('td');

    novaColuna.dataset.id = item.id

    elementoNome.innerHTML = item.nome
    elementoContato.innerHTML = item.contato
    elementoIdade.innerHTML = item.cidade
    elementoCep.innerHTML = item.cep
    elementoRua.innerHTML = item.rua
    elementoComplemento.innerHTML = item.complemento
    elementoNumero.innerHTML = item.numero

    novaColuna.appendChild(elementoNome);
    novaColuna.appendChild(elementoContato);
    novaColuna.appendChild(elementoIdade);
    novaColuna.appendChild(elementoCep);
    novaColuna.appendChild(elementoRua);
    novaColuna.appendChild(elementoComplemento);
    novaColuna.appendChild(elementoNumero)
   
    novaColuna.appendChild(criaBotaoDelete(item.id))
    novaColuna.appendChild(criaBotaoEdit(item.id))

    tabela.appendChild(novaColuna)
}

function criaBotaoDelete(id) {
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Excluir'
    buttonDelete.classList.add('buttonExcluir')

    buttonDelete.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return buttonDelete;
}

function criaBotaoEdit(id) {
    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Editar'
    buttonEdit.classList.add('buttonEditar')

    return buttonEdit;
}

function deletaElemento(tag, id) {
    tag.remove()

    cadastrados.splice(cadastrados.findIndex( elemento => elemento.id === id), 1)

    localStorage.setItem('cadastrados', JSON.stringify(cadastrados))
}