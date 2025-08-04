const paragrafos = document.querySelectorAll('.paragrafos p');

const estilosBody = getComputedStyle(document.body); // pega as configurações de estilos computadas pelo navegador
const backgoundColorBody = estilosBody.backgroundColor;

paragrafos.forEach((el) => {
    el.style.backgroundColor = backgoundColorBody;
    el.style.color = '#fff';
});
