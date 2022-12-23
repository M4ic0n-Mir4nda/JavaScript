let botao = document.querySelectorAll('.tecla')

function tocaSom(botao, som) {
    botao.addEventListener('click', function() {
        som.play()
    })
};

/*

let pom = document.querySelectorAll('.tecla')[0];
tocaSom(pom, document.querySelector('#som_tecla_pom'));

*/

tocaSom(botao[0], document.querySelector('#som_tecla_pom'));
tocaSom(botao[1], document.querySelector('#som_tecla_clap'))
tocaSom(botao[2], document.querySelector('#som_tecla_tim'));
tocaSom(botao[3], document.querySelector('#som_tecla_puff'));
tocaSom(botao[4], document.querySelector('#som_tecla_splash'));
tocaSom(botao[5], document.querySelector('#som_tecla_toim'));
tocaSom(botao[6], document.querySelector('#som_tecla_psh'));
tocaSom(botao[7], document.querySelector('#som_tecla_tic'));
tocaSom(botao[8], document.querySelector('#som_tecla_tom'))