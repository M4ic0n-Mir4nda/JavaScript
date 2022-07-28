function verificar() {
    var nota1 = window.document.getElementById('nota1')
    var nota2 = window.document.getElementById('nota2')
    var nota3 = window.document.getElementById('nota3')
    var nota4 = window.document.getElementById('nota4')
    var res = window.document.getElementById('res')

    if (nota1.value.length == 0 || nota2.value.length == 0 || nota3.value.length == 0 || nota4.value.length == 0) {
        window.alert('[ERRO] digite uma nota.')
    } else {
        var n1 = Number(nota1.value)
        var n2 = Number(nota2.value)
        var n3 = Number(nota3.value)
        var n4 = Number(nota4.value)
        
        if (n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0) {
            res.innerHTML = 'Impossivel verificar! Nota negativa é inválida.'
        } else {
            res.innerHTML = 'Verificando notas...'
            var media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10
            if (media > 7) {
                res.innerHTML += '<p>Você foi Aprovado!</p>'
                res.innerHTML += `Nota: ${media.toFixed(1)}`
            } else {
                res.innerHTML += '<p>Você foi Reprovado!'
                res.innerHTML += `<p>Nota: ${media.toFixed(1)}`
            }
        }
    }
}

function recuperacao() {
    var nota1 = window.document.getElementById('nota1')
    var nota2 = window.document.getElementById('nota2')
    var nota3 = window.document.getElementById('nota3')
    var nota4 = window.document.getElementById('nota4')
    var recup = window.document.getElementById('recup')
    var res = window.document.getElementById('res')

    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)
    var media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10

    if (media >= 5 && media <= 6.9) {
        var recuperacao = Number(recup.value)
        res.innerHTML = ''
        res.innerHTML += `<p>Verificando nota de Recuperação...`
        var nova_nota = (media + recuperacao) / 2
        if (nova_nota >= 5) {
            res.innerHTML += `<p>Aluno Aprovado!`
            res.innerHTML += `Nota: ${nova_nota.toFixed(1)}`
        } else {
            res.innerHTML += '<p>Aluno Reprovado!'
            res.innerHTML += `Nota: ${nova_nota.toFixed(1)}`
        }
    } else {
        if (media > 7)
        window.alert('Você ja foi Aprovado!')
    }
}