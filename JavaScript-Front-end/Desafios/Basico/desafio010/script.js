function clicar() {
    var a = window.prompt('Qual é o valor de a?')
    var b = window.prompt('Qual é o valor de b?')
    var c = window.prompt('Qual é o valor de c?')
    var soma = b ** 2 - (4 * a * c)

    var res = window.document.getElementById('res')
    var p = window.document.getElementsByTagName('p')[0]
    p.innerHTML = '<p>Resolvendo Bhaskara</p>'
    p.style.fontWeight = 'bold'
    p.style.fontSize = '15pt'
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b} + ${0} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi Δ = <strong>${soma}</strong></p>`
}