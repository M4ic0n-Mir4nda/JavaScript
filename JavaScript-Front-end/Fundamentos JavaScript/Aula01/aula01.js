let p1 = document.getElementById('p1')
let lutador = 'Fedor Vladimirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83

p1.innerHTML = `Lutador: ${lutador} <br>`
p1.innerHTML += `Nacionalidade: ${nacionalidade} <br>`
p1.innerHTML += `Idade: ${idade} anos <br>`
p1.innerHTML += `Peso: ${peso} Kg <br>`
p1.innerHTML += `Altura: ${altura} m <br>`

//--------------------------------

let p2 = document.getElementById('p2')

const dia = 10
const mes = 9
const ano = 2022
const frase = 'Seja curioso, Leia de tudo. Tente coisas novas. O que as pessoas chamando de inteligência se resume a curiosidade.'
const autor = 'Aaron Swartz'

p2.innerHTML = `${dia}/${mes}/${ano} <br>`
p2.innerHTML += `${frase} <br>`
p2.innerHTML += `${autor}`

//-------------------

let p3 = document.getElementById('p3')

const meses = ['Janeiro', 'Fevereiro', 'Março']

p3.innerHTML = `${meses[0]}, ${meses[1]}, ${meses[2]},...`

let p4 = document.getElementById('p4')

const jogo = {
    Título: 'League Of Legends - LOL',
    Desenvolvido: 'Riot Games',
    Lançamento: 2009
}

p4.innerHTML = `Jogo: ${jogo.Título} <br>`
p4.innerHTML += `Desenvolvido por: ${jogo.Desenvolvido} <br>`
p4.innerHTML += `Ano de Lançamento: ${jogo.Lançamento}`
