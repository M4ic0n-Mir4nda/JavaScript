const form = document.querySelector('.form');
const container = document.querySelector('.container');
let listaTarefas = JSON.parse(localStorage.getItem('listaTarefas')) || [];

listaTarefas.forEach( (elemento) => {
    criarLinha(elemento);
})

function adicionarTarefa(tarefa) {
    listaTarefas.push(tarefa);
    criarLinha(tarefa);
    limpaInput();
}

function criarLinha(tarefa) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = tarefa.tarefa;
    ul.appendChild(li);
    ul.appendChild(criarBtnApagar(tarefa.id));
    container.appendChild(ul);
}

function criarBtnApagar(id) {
    const button = document.createElement('button');
    button.innerHTML = 'Apagar';

    button.addEventListener('click', function() {
        apagarTarefa(this.parentNode, id);
    })

    return button;
}

function apagarTarefa(tag, id) {
    tag.remove();
    listaTarefas.splice(listaTarefas.findIndex( el => el.id === id), 1);
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
}

function limpaInput() {
    let inputTarefa = document.querySelector('.tarefa');
    inputTarefa.value = '';
    inputTarefa.focus();
}

form.addEventListener('submit', (e) => {
    const tarefaTexto = document.querySelector('.tarefa');
    if (!tarefaTexto.value) {
        e.preventDefault()
        return;
    };
    const nomeTarefa = {
        tarefa: tarefaTexto.value
    };
    nomeTarefa.id = listaTarefas[listaTarefas.length - 1] ? listaTarefas[listaTarefas.length - 1].id + 1 : 0;
    adicionarTarefa(nomeTarefa);

    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
    e.preventDefault()
})
