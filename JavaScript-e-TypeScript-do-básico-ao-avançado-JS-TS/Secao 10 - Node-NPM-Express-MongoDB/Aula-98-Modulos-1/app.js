const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Silva');
console.log(p1)

// axios('https://viacep.com.br/ws/08615090/json/')
//     .then(response => console.log(response.data))
//     .catch( e => console.log(e))