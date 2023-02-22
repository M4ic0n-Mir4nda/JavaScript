import app from "./src/app.js"

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`) // Define a porta que vai ser escutado a requisição e linkar o servidor com a porta
})

// npm install nodemon@2.0.15 -D > Instala a biblioteca para realizar o reload a cada alteração no código