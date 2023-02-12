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
const buttonCancelar = document.querySelector('#btn-cancelar');
const buttonSalvar = document.querySelector('#btn-cadastra');
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

buttonSalvar.addEventListener('click', (e) => {

    const usuario = {
        "nome": campoNome.value,
        "cep": campoCep.value,
        "cidade": campoCidade.value,
        "bairro": campoBairro.value,
        "rua": campoRua.value,
        "numero": campoNumero.value,
        "complemento": campoComplemento.value,
    }

    usuario.id = cadastrados[cadastrados.length - 1] ? cadastrados[cadastrados.length - 1].id + 1 : 0;
    criaElemento(usuario);

    cadastrados.push(usuario);

    nome.value = '';
    cep.value = '';
    cidade.value = '';
    bairro.value = '';
    rua.value = '';
    numero.value = '';
    complemento.value = '';

    form.style.display = 'none';
    divTabela.style.display = 'block';    


    localStorage.setItem("cadastrados", JSON.stringify(cadastrados));

    e.preventDefault();

})

function criaElemento(item) {
    const novaLinha = document.createElement('tr')
    
    const elementoNome = document.createElement('td');
    const elementoCep = document.createElement('td');
    const elementoCidade = document.createElement('td');
    const elementoBairro = document.createElement('td');
    const elementoRua = document.createElement('td');
    const elementoNumero = document.createElement('td');
    const elementoComplemento = document.createElement('td');

    novaLinha.dataset.id = item.id

    elementoNome.innerHTML = item.nome;
    elementoCep.innerHTML = item.cep;
    elementoCidade.innerHTML = item.cidade;
    elementoBairro.innerHTML = item.bairro;
    elementoRua.innerHTML = item.rua;
    elementoNumero.innerHTML = item.numero;
    elementoComplemento.innerHTML = item.complemento;

    novaLinha.appendChild(elementoNome);
    novaLinha.appendChild(elementoCep);
    novaLinha.appendChild(elementoCidade);
    novaLinha.appendChild(elementoBairro);
    novaLinha.appendChild(elementoRua);
    novaLinha.appendChild(elementoNumero);
    novaLinha.appendChild(elementoComplemento);
   
    novaLinha.appendChild(criaBotaoDelete(item.id));
    novaLinha.appendChild(criaBotaoEdit(item.id));

    tabela.appendChild(novaLinha);
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
    document.querySelector('#btn-cadastra').style.display = 'none';
    document.querySelector('#btn-cancelar').style.display = 'none';

    const valorElemento = cadastrados.find((elemento) => elemento.id === id);

    campoNome.value = valorElemento.nome
    campoCep.value = valorElemento.cep;
    campoCidade.value = valorElemento.cidade;
    campoBairro.value = valorElemento.bairro;
    campoRua.value = valorElemento.rua;
    campoNumero.value = valorElemento.numero;
    campoComplemento.value = valorElemento.complemento;

    const formAtualiza = document.querySelector('.form-buttons');

    const buttonAtualiza = document.createElement('button');
    buttonAtualiza.innerText = 'Atualizar';
    buttonAtualiza.classList.add('btn-atualiza');

    formAtualiza.appendChild(buttonAtualiza)

    form.addEventListener('submit', () => {
        atualizaElemento(id);

        localStorage.setItem("cadastrados", JSON.stringify(cadastrados));
           
        form.style.display = 'none';

        divTabela.style.display = 'block';
    })
}

function atualizaElemento(id) {          
        const idAtual = id
        const nomeAtualizado = campoNome.value;
        const cepAtualizado = campoCep.value;
        const cidadeAtualizado = campoCidade.value;
        const bairroAtualizado = campoBairro.value;
        const ruaAtualizado = campoRua.value;
        const numeroAtualizado = campoNumero.value;
        const complementoAtualizado = campoComplemento.value;

        const usuarioAtualizado = {
            "nome": nomeAtualizado,
            "cep": cepAtualizado,
            "cidade": cidadeAtualizado,
            "bairro": bairroAtualizado,
            "rua": ruaAtualizado,
            "numero": numeroAtualizado,
            "complemento": complementoAtualizado,
            "id": idAtual,
        }

        cadastrados.forEach((elemento, indice) => {
            if (elemento.id === usuarioAtualizado.id) {
                cadastrados[indice] = usuarioAtualizado;
            }
        })
}