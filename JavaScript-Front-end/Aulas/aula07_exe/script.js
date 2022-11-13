function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha-250.jpg'
        document.body.style.background = '#BDD9F2'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde-250.jpg'
        document.body.style.background = '#D99255'
    } else {
        //BOA NOITE!
        img.src = 'noite-250.jpg'
        document.body.style.background = '#102C41'
    }
}
