import { generateKeyPairSync, createSign, createVerify } from 'crypto';
//gera as chaves   // cria as assinaturas  // verifica as assinaturas

const { privateKey, publicKey } = generateKeyPairSync('rsa', { // Objeto sugerido pela documentação do modulo
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }
});

let dados = "Essa string vai ser assinada!";

// Assinatura

const assinador = createSign('rsa-sha256');

assinador.update(dados); // assina os dados

const assinatura = assinador.sign(privateKey, 'hex') // o método sign recebe como parametro a chave privada que é utilizada para assinar e a codificação que ela vai ser feita

console.log(`Assinatura:
${assinatura}`)

// Intermediário

//dados += 'Arquivo alterado'

// Envio desse dcoumento ------------ Documento, assinatura e chave pública

const verificador = createVerify('rsa-sha256');

verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex') // verify como o nome ja diz ela verifica se aquele documento corresponde aquelas dados

console.log(ehVerificado)