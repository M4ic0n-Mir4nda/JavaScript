const botao = document.querySelectorAll('.tecla');
const som = document.querySelectorAll('audio');

function tocaSom(button, sound) {
    button.addEventListener('click', function() {
        sound.play()
    })
};

for (let atual = 0; atual < botao.length; atual++) {
    tocaSom(botao[atual], som[atual]);
};

/*
Outras formas de fazer.

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

function tocaSom(button, sound) {
    button.addEventListener('click', function() {
        document.querySelector(sound).play()
    })
};

for (let atual = 0; atual < botao.length; atual++) {

    const instrumento = botao[atual].classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio)
    
    tocaSom(botao[atual], idAudio);
};

*/
