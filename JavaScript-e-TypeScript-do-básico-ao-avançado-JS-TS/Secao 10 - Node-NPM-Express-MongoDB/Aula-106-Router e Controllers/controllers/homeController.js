exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome"><br>
    Outro campo: <input type="text" name="outroCampo">
    <button>Enviar</button>
`);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST')
}