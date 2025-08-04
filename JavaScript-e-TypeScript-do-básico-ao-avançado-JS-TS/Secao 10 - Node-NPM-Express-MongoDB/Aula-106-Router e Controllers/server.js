const express = require('express');
const app = express();
const routes = require('./routes');

app.use(
    express.urlencoded( {extended: true }),
    routes
);

app.listen(3000, () => {
    console.log('Servidor executando em http://localhost:3000');
});
