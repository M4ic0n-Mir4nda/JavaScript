function clicar() {
    var nome = window.prompt('Qual é o nome do funcionário?')
    var salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var porc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var aumento = salario * (porc / 100)
    var soma = salario + aumento
    var p = window.document.getElementsByTagName('p')[0]
    var res = document.getElementById('res')
    p.innerHTML = `${nome} recebeu um aumento salarial!`
    p.style.fontWeight += 'bold'
    p.style.fontSize = '1.5em'
    res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}% o salário vai aumentar ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês.`
    res.innerHTML += `<p>E a partir dai, ${nome} vai passar a ganhar ${soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`
}