                                        // Busca os valores no html com data atributte
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const arrayCoresRobo = document.querySelectorAll('[data-corRobo]');
const btnAlterarCor = document.querySelector('.alterar');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

trocaCorRobo(arrayCoresRobo);

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
                    // dataset Busca o elemento data no html - // parentNode busca exatamente qual foi a classe clicada
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
            // Busca só o valor clicado - // Busca os valores no html com data atributte
    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        peca.value--;
    } else {
        peca.value++;
    }
};

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

function trocaCorRobo(arrRobo) {
    let contador = 0;
    btnAlterarCor.addEventListener('click', () => {
        if (contador > 5) {
            contador = 0;
            arrRobo.forEach( (robo) => {
                robo.classList.remove('mostrarCores');
            })
        }
        arrRobo[contador].classList.add('mostrarCores');
        contador++;
    })
}
