let titulo = document.querySelector('h1');
titulo.textContent = 'Aula 09 Manipular CSS';
let imagem = document.querySelector('#foto');
imagem.setAttribute('src', 'pride-fc.jpg'); // Seta uma imagem definindo como 'src' de acordo com o caminho e o nome da imagem
imagem.setAttribute('width', '280px'); // Seta a largura da imagem

/* MANIPULAR CSS */

titulo.style.color = 'red';
titulo.style.background = 'black';
titulo.style.borderBottom = '2px solid red';
titulo.style.padding = '0.625rem';
titulo.style.borderRadius = '5px';

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul') // Definindo propriedas nas CSS's você não precisar fazer varis linhas definindo cada propriedade igual feito a cima, aqui você Seta o atributo da classe azul feito no arquivo CSS
//box[0].removeAttribute('class') Aqui você removeu a classe que foi definida incluindo TODAS as classes


/// MODOS DE COR ///

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark');
    tela.classList.add('dark') // classList.add Serve para adicionar a classe que você vai adicionar a formatação
    tela.classList.remove('light') // classList.remove esse ja é o inverso
    //Procure usar o classList por recomendação do professor
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light');
    tela.classList.remove('dark');
    tela.classList.add('light')
}