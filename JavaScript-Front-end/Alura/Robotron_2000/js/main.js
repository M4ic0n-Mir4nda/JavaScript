const controle = document.querySelectorAll('[data-controle]')
                                        // Busca os valores no html com data atributte

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
                    // dataset Busca o elemento data no html - // parentNode busca exatamente qual foi a classe clicada
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
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
