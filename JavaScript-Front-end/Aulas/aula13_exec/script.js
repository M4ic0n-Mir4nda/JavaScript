var l = []
var add = window.document.getElementById('numero')
var selec = window.document.getElementById('lista')
var res = window.document.getElementById('res')

function adicionar() {
    res.innerHTML = ''
    if (add.value.length == 0) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else if (add.value < 1 || add.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        var n = Number(add.value)
        var pos = l.indexOf(n)
        
        if (pos == -1) {
            var list = document.createElement('option')
            list.innerHTML += `Valor ${n} adicionado. <br>`
            selec.appendChild(list)
            l.push(n)
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }
    } 
}

function finalizar() {
    if (add.value.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var maior = 0
        var soma = 0
        var n = Number(add.value)
        var total = l.length
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    
    for (var pos = 0; pos < l.length; pos++) {
        if (l[pos] > maior) {
            var maior = l[pos]
        }var menor = Math.min(...l)
        var soma = soma + l[pos]
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}.`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`

    var media = soma / total
    res.innerHTML += `<p> A média dos valores digitados é ${media}.`
    }
}
