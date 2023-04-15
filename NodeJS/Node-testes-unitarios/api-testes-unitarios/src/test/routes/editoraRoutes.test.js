import app from "../../app";
import request from "supertest";
import { 
    describe, expect, it, jest,
} from "@jest/globals";

let server;
beforeEach( () => {
    const port = 3000;
    server = app.listen(port);
});

afterEach( () => {
    server.close();
});

describe('GET em /editoras', () => {
    it('Deve retornas uma lista de editoras', async () => {
        const resposta = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json') // é setado que precisa recebar um arquivo em json
            .expect('content-type', /json/) // verifica se o valor recebido é um json
            .expect(200);

        expect(resposta.body[0].email).toEqual('e@e.com');
    });
});

let idResposta;
describe('POST em /editoras', () => {
    it('Deve adicionar uma nova editora', async () => {
        const resposta = await request(app)
         .post('/editoras')
         .send({
             nome: "CDC",
             cidade: "Sao paulo",
             email: "s@s.com",
         })
         .expect(201);
        
        idResposta = resposta.body.content.id
    });

    it('Deve não adicionar nada ao passar o body vazio', async () => {
        await request(app)
            .post('/editoras')
            .send({})
            .expect(400);
    });
});

describe('GET em /editoras/id', () => {
    it('Deve retornar o recurso selecionado', async () => {
        await request(app)
            .get(`/editoras/${idResposta}`)
            .expect(200);
    });

describe(`PUT em /editoras/${idResposta}`, () => {
    test.each([  // Teste em formas de tabelas para testes com muitos objetos                                
        ['nome', { nome: 'Casa do Codigo'}],
        ['cidade', { cidade: 'SP'}],
        ['email', { email: 'cdc@cdc.com'}],
    ])('Deve alterar o campo %s', async (chave, param) => {
        
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao.request(app)
            .put(`/editoras/${idResposta}`)
            .send(param)
            .expect(204);

        expect(spy).toHaveBeenCalled(); // Para saber se essa chamada foi feita ou requisitada
    });
});

describe('DELETE em /editoras/id', () => {
    it('Deletar o recurso adicionado', async () => {
        await request(app)
            .delete(`/editoras/${idResposta}`)
            .expect(200);
        });
    });
});

// https://jestjs.io/pt-BR/docs/jest-object > documentacao jest com mocks
// https://jestjs.io/pt-BR/docs/jest-object#jestspyonobject-methodname > pagina com jest.spyOn