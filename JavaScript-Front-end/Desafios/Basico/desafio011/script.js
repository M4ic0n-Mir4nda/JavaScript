function verificar() {
    var p_antigo = window.prompt('Qual era o preco anterior do produto?')
    var p_atual = window.prompt('Qual é o preço atual do produto?')
    var res = window.document.getElementById('res')
    var p = window.document.getElementsByTagName('p')[1]

    p.innerHTML = '<p><strong>Analisando os valores informados</strong>'
    p.style.fontSize = '22pt'

    if (p_antigo.value.length == 0 || p_atual.value.length == 0) {
        p.innerHTML += 'Preços Incorretos'
    }
}