const TutorRepository = require('../../repositories/TutorRepository');
const request = require('supertest')
const app = require('../../../server.js');

// let server;
// beforeEach( () => {
//     const port = 3000;
//     server = app.listen(port)
// })

// afterEach( () => {
//     server.close();
// });

describe('GET em /tutores', () => {
    it('Deve buscar todos os tutores cadastrados', async () => {
        const response = await request(app)
            .get('/tutores')
            .expect(200)

        const listarTutores = await TutorRepository.getAllTutorsRepository();
        
        expect(JSON.stringify(response.body)).toEqual(JSON.stringify(listarTutores));
    });
});

describe('GET em /tutores/id', () => {
    it('Deve retornar um tutor pelo id dele', async () => {
        const tutor = {
            id: 1,
            name: "Lucas Silva",
            email: "lucas@lucas.com",
            role: "tutor",
            password: "$2a$10$dsH.527lPdwNUocvfiQl5ejroKrxy4vCz0VFTbn9cyvboi3cLiXhu",
            profilePictureURL: "URL",
            telephone: "9 2222-2221",
            about: "Sobre...",
            city: "Sao Paulo",
            createdAt: "2023-04-15",
            updatedAt: "2023-04-15"
        };

        const tutorExistente = await TutorRepository.getTutoByIdRepository(1);

        expect(tutorExistente).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                email: expect.any(String),
                ...tutorExistente,
            })
        );

        expect(JSON.stringify(tutorExistente)).toEqual(JSON.stringify(tutor));
    });

    it('Deve retornar um erro de que não foi encontrado o id passado', async () => {
        const tutorInexistente = await TutorRepository.getTutoByIdRepository(20);

        const response = await request(app)
            .get(`/tutores/${20}`)

        expect('Não encontrado').toBe(tutorInexistente);
        expect(response.statusCode).toBe(400)
    });
});

describe('POST em /tutores', () => {
    it('Deve criar um novo tutor', async () => {
        const response = await request(app)
            .post('/tutores')
            .send({
                name: "Ong Teste 4",
                email: "ong4@ong4.com",
                role: "tutor",
                password: "senha123",
                profilePictureURL: "URL",
                telephone: "9 2556-6913",
                about: "Sobre...",
                city: "Sao Paulo",
            })

        expect(response.statusCode).toBe(200);
    }),
    
    it('Deve retornar um status 400 se os campos obrigatórios estiverem faltando', async () => {
        const tutor = {
            "name": "",
            "email": "",
            "role": "tutor",
            "password": "",
            "profilePictureURL": "URL",
            "telephone": "9 2556-6913",
            "about": "Sobre...",
            "city": "Sao Paulo",
        }

        const response = await request(app)
            .post('/abrigos')
            .send(tutor);

        expect(response.statusCode).toBe(400);
        expect(response.body).toStrictEqual({
                "errors": [
                    {
                        "value": "",
                        "msg": "campo nome deve ter no minimo 5 caracteres",
                        "param": "name",
                        "location": "body"
                    },
                    {
                        "value": "",
                        "msg": "email é obrigatorio",
                        "param": "email",
                        "location": "body"
                    },
                    {
                        "value": "",
                        "msg": "campo senha deve ter no minimo 5 caracteres",
                        "param": "password",
                        "location": "body"
                    }
                ]
        });
    });
});