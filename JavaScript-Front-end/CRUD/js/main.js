const form = document.querySelector('#form');
const buttonCadastro = document.querySelector('#button-cadastrar');
const buttonCancelar = document.querySelector('#btn-delete');
const divTabela = document.querySelector('#cadastrados');
const tabela = document.querySelector('#tabela');
const cadastrados = JSON.parse(localStorage.getItem('cadastrados')) || [];

cadastrados.forEach( (elemento) => {
    criaElemento(elemento);
})

buttonCadastro.addEventListener('click', (e) => {

    form.style.display = 'block';
    divTabela.style.display = 'none';

    e.preventDefault();
})

buttonCancelar.addEventListener('click', (e) => {

    document.querySelector('#nome').value = '';
    document.querySelector('#cep').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#rua').value = '';
    document.querySelector('#numero').value = '';
    document.querySelector('#complemento').value = '';

    form.style.display = 'none';
    divTabela.style.display = 'block';

    e.preventDefault();
})

form.addEventListener('submit', (e) => {

    const nome = e.target.elements['nome'];
    const cep = e.target.elements['cep'];
    const cidade = e.target.elements['cidade'];
    const bairro = e.target.elements['bairro'];
    const rua = e.target.elements['rua'];
    const numero = e.target.elements['numero'];
    const complemento = e.target.elements['complemento'];

    const pessoa = {
        "nome": nome.value,
        "cep": cep.value,
        "cidade": cidade.value,
        "bairro": bairro.value,
        "rua": rua.value,
        "numero": numero.value,
        "complemento": complemento.value,
    }

    const existe = cadastrados.find( elemento => elemento.nome === pessoa.nome);

    if (existe) {
        alert('Usúario ja cadastrado');
    } else {
        pessoa.id = cadastrados[cadastrados.length - 1] ? cadastrados[cadastrados.length - 1].id + 1 : 0;
        criaElemento(pessoa);

        cadastrados.push(pessoa);

        nome.value = '';
        cep.value = '';
        cidade.value = '';
        bairro.value = '';
        rua.value = '';
        numero.value = '';
        complemento.value = '';

        form.style.display = 'none';

        divTabela.style.display = 'block';    
    }

    localStorage.setItem("cadastrados", JSON.stringify(cadastrados))

    e.preventDefault();

})

function criaElemento(item) {
    const novaColuna = document.createElement('tr')
    
    const elementoNome = document.createElement('td');
    const elementoCep = document.createElement('td');
    const elementoCidade = document.createElement('td');
    const elementoBairro = document.createElement('td');
    const elementoRua = document.createElement('td');
    const elementoNumero = document.createElement('td');
    const elementoComplemento = document.createElement('td');

    novaColuna.dataset.id = item.id

    elementoNome.innerHTML = item.nome;
    elementoCep.innerHTML = item.cep;
    elementoCidade.innerHTML = item.cidade;
    elementoBairro.innerHTML = item.bairro;
    elementoRua.innerHTML = item.rua;
    elementoNumero.innerHTML = item.numero;
    elementoComplemento.innerHTML = item.complemento;

    novaColuna.appendChild(elementoNome);
    novaColuna.appendChild(elementoCep);
    novaColuna.appendChild(elementoCidade);
    novaColuna.appendChild(elementoBairro);
    novaColuna.appendChild(elementoRua);
    novaColuna.appendChild(elementoNumero);
    novaColuna.appendChild(elementoComplemento);
   
    novaColuna.appendChild(criaBotaoDelete(item.id));
    novaColuna.appendChild(criaBotaoEdit(item.id));

    tabela.appendChild(novaColuna);
}

function criaBotaoDelete(id) {
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Excluir';
    buttonDelete.classList.add('buttonExcluir');

    buttonDelete.addEventListener('click', function() {
        deletaElemento(this.parentNode, id);
    })

    return buttonDelete;
}

function criaBotaoEdit(id) {
    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Editar';
    buttonEdit.classList.add('buttonEditar');

    // buttonEdit.addEventListener('click', function(e) {
    //     editaElemento(this.parentNode, id);
    // })

    return buttonEdit;
}

// function editaElemento(tag, id) {
    
//     form.style.display = 'block';
//     divTabela.style.display = 'none';

//     const valoresElemento = cadastrados.find((elemento) => elemento.id === id);

//     document.querySelector('#nome').value = valoresElemento.nome
//     document.querySelector('#cep').value = valoresElemento.cep;
//     document.querySelector('#cidade').value = valoresElemento.cidade;
//     document.querySelector('#bairro').value = valoresElemento.bairro;
//     document.querySelector('#rua').value = valoresElemento.rua;
//     document.querySelector('#numero').value = valoresElemento.numero;
//     document.querySelector('#complemento').value = valoresElemento.complemento;

//     cadastrados.splice(cadastrados.findIndex( elemento => elemento.id === id), 1);

//     const buttonAtualiza = document.querySelector('#btn-cadastra');

//     buttonAtualiza.addEventListener('click', (e) => {
//         console.log(e.target.dataset.criar)
//     })

//     //buttonAtualiza.dataset.editar = "editar"

//     //buttonAtualiza.innerHTML = "Atualizar";
    
//     // document.querySelector('#nome').value = valoresElemento.nome
//     // document.querySelector('#cep').value = valoresElemento.cep;
//     // document.querySelector('#cidade').value = valoresElemento.cidade;
//     // document.querySelector('#bairro').value = valoresElemento.bairro;
//     // document.querySelector('#rua').value = valoresElemento.rua;
//     // document.querySelector('#numero').value = valoresElemento.numero;
//     // document.querySelector('#complemento').innerHTML = valoresElemento.complemento;

// }

function deletaElemento(tag, id) {
    tag.remove();

    cadastrados.splice(cadastrados.findIndex( elemento => elemento.id === id), 1);

    localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
}

async function validaCep(cep) {
    try {
        const request = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        const response = await request.json();
        if (response.erro) {
            alert('CEP não existente!')
            throw Error('CEP não existente!');
        }
        document.querySelector('#rua').value = response.logradouro
        document.querySelector('#bairro').value = response.bairro;
        document.querySelector('#cidade').value = response.localidade;
        return response;
    } catch (erro) {
        console.log(erro);
    }
}

function mascaraCep(cep) {
    if (cep.value.length == 5) {
        cep.value = cep.value + '-'
    }
}




