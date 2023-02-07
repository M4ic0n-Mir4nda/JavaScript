// Formulario
const form = document.querySelector('#form');

// Inputs do Form
const campoNome = document.querySelector('#nome');
const campoCep = document.querySelector('#cep');
const campoCidade = document.querySelector('#cidade');
const campoBairro = document.querySelector('#bairro');
const campoRua = document.querySelector('#rua');
const campoNumero = document.querySelector('#numero');
const campoComplemento = document.querySelector('#complemento');

// Array dos cadastrados
const cadastrados = JSON.parse(localStorage.getItem('cadastrados')) || [];

// Referente a Tabela
const divTabela = document.querySelector('#cadastrados');
const buttonCadastrar = document.querySelector('#button-cadastrar');
const buttonCancelar = document.querySelector('#btn-delete');
const tabela = document.querySelector('#tabela');

cadastrados.forEach( (elemento) => {
    criaElemento(elemento);
})

buttonCadastrar.addEventListener('click', (e) => {

    form.style.display = 'block';
    divTabela.style.display = 'none';

    e.preventDefault();
})

buttonCancelar.addEventListener('click', (e) => {

    campoNome.value = '';
    campoCep.value = '';
    campoCidade.value = '';
    campoBairro.value = '';
    campoRua.value = '';
    campoNumero.value = '';
    campoComplemento.value = '';

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
        pessoa.id = existe.id;
        atualizaElemento(pessoa);

        localStorage.setItem("cadastrados", JSON.stringify(cadastrados));

        form.style.display = 'none';
        divTabela.style.display = 'block';

        nome.value = '';
        cep.value = '';
        cidade.value = '';
        bairro.value = '';
        rua.value = '';
        numero.value = '';
        complemento.value = '';

        buttonAtualiza.style.display = 'none';
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

    localStorage.setItem("cadastrados", JSON.stringify(cadastrados));

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

function deletaElemento(tag, id) {
    tag.remove();

    cadastrados.splice(cadastrados.findIndex( elemento => elemento.id === id), 1);

    localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
}

function criaBotaoEdit(id) {
    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Editar';
    buttonEdit.classList.add('buttonEditar');

    buttonEdit.addEventListener('click', function() {
        buscaDados(this.parentNode, id);
})

    return buttonEdit;
}

 function buscaDados(tag, id) {
    
    form.style.display = 'block';
    divTabela.style.display = 'none';
    document.querySelector('#btn-cadastra').style.display = 'none'
    document.querySelector('#btn-delete').style.display = 'none'

    const formAtualiza = document.querySelector('.form-buttons');

    const buttonAtualiza = document.createElement('button');
    buttonAtualiza.innerText = 'Atualizar';
    buttonAtualiza.classList.add('btn-atualiza')

    formAtualiza.appendChild(buttonAtualiza)

    const valorElemento = cadastrados.find((elemento) => elemento.id === id);

    campoNome.value = valorElemento.nome
    campoCep.value = valorElemento.cep;
    campoCidade.value = valorElemento.cidade;
    campoBairro.value = valorElemento.bairro;
    campoRua.value = valorElemento.rua;
    campoNumero.value = valorElemento.numero;
    campoComplemento.value = valorElemento.complemento;
}

function atualizaElemento(item) {
    campoNome.value = item.nome
    campoCep.value = item.cep;
    campoCidade.value = item.cidade;
    campoBairro.value = item.bairro;
    campoRua.value = item.rua;
    campoNumero.value = item.numero;
    campoComplemento.value = item.complemento;

    const itemAtualizado = item

    cadastrados.forEach((itemAtual, indice) =>  {
        if (itemAtual.id === itemAtualizado.id || itemAtualizado.nome.split(' ')[0] === itemAtual.nome) {
            cadastrados[indice] = itemAtualizado
        }
    }) 
}

async function validaCep(cep) {
    try {
        const request = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        const response = await request.json();
        if (response.erro) {
            alert('CEP não existente!')
            throw Error('CEP não existente!');
        }
        campoRua.value = response.logradouro
        campoBairro.value = response.bairro;
        campoCidade.value = response.localidade;
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


