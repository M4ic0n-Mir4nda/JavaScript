const TutorRepository = require('../../repositories/TutorRepository');
const request = require('supertest')
const app = require('../../../server.js');

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

        expect('Não encontrado').toBe(tutorInexistente);
    });
});