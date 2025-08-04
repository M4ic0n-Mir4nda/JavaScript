const fs = require('fs');

const data = {
    users: [{
            nome: 'Maicon',
            idade: 20
        }]
}

const pessoa = {
    nome: 'Joao',
    idade: 30
}

data.users.push(pessoa)

fs.writeFileSync('db.json', JSON.stringify(data));

const arr = fs.readFileSync('db.json')

const jsonData = JSON.parse(arr)

console.log(jsonData)

for (valor of jsonData.users) {
    console.log(valor)
}