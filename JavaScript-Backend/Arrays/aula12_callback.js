const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

// Funciona passando a função imprimeNome
nomes.forEach(imprimeNome)

// Funciona do mesmo jeito passando uma função como parametro
nomes.forEach( nome => {
    console.log(nome)
})

function imprimeNome(nome) {
    console.log(nome)
}