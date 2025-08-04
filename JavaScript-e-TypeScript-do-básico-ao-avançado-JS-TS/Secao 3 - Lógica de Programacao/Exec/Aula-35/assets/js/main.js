const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const div = document.createElement('div');
const container = document.querySelector('.container');

elementos.map((item) => {
    const elemento = document.createElement(item.tag);
    elemento.innerHTML = item.texto;
    div.appendChild(elemento);
    container.appendChild(div);
});