function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-homem-250.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem-250.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto-250.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-homem-250.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'bebe-mulher-250.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher-250.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta-250.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-mulher-250.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}