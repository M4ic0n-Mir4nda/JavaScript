function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento nao encontrado ou Seletor invalido');
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
};

// Outras formas de fazer.

/*
const botao = document.querySelectorAll('.tecla');
const som = document.querySelectorAll('audio');

function tocaSom(button, sound) {
    button.addEventListener('click', function() {
        sound.play();
    });

    button.onkeydown = function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            button.classList.add('ativa');
        }
    };

    button.onkeyup = function() {
        button.classList.remove('ativa');
    };
};

for (let atual = 0; atual < botao.length; atual++) {
    tocaSom(botao[atual], som[atual]);
};
*/

/*

let pom = document.querySelectorAll('.tecla')[0];
tocaSom(pom, document.querySelector('#som_tecla_pom'));

---------

tocaSom(botao[0], som[0]);
tocaSom(botao[1], som[1]);
tocaSom(botao[2], som[2]);
tocaSom(botao[3], som[3]);
tocaSom(botao[4], som[4]);
tocaSom(botao[5], som[5]);
tocaSom(botao[6], som[6]);
tocaSom(botao[7], som[7]);
tocaSom(botao[8], som[8]);

----------
*/




