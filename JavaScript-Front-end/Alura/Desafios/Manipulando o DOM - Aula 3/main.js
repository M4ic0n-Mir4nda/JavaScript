const tintasEstoque = document.querySelectorAll('[cor]');

function desaparecerTintas() {
    tintasEstoque.forEach( (tintas) => tintas.style.display = 'none')
}

function mostraTintas() {
    tintasEstoque.forEach( (tinta) => tinta.style.display = 'block')
}
