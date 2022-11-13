function gerar() {
    var num = window.document.getElementById('txtnum')
    var lista = window.document.getElementById('selftab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        lista.innerHTML = ''
        for (var tabuada = n; c <= 10; c++ ) {
            var item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n * c} <br>`
            item.value = `tab${c}`
            lista.appendChild(item)
        }
    }
}