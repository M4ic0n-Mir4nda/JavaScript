const database = require('../../models')

describe('Testanto o modelo Usuario', () => {
    const newUser = {
        name: "Mariano Andrade",
        email: "mariano@silva.com",
        role: "tutor",
        password: "senha123456",
        profilePictureURL: "URL",
        telephone: "9 2222-2221",
        about: "Sobre...",
        city: "Sao Paulo",
    }

    it.skip('Deve criar um novo usuario', async () => {
        const data = await database.Usuarios.create(newUser);

        const returned = await database.Usuarios.findOne({ where: {id: data.id} });

        expect(returned).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: expect.any(String),
                password: expect.any(String),
                ...newUser,
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            }),
        );
    });

    it.skip('Deve realizar uma chamada simulada ao BD', async () => {
        database.Usuarios.create = jest.fn().mockReturnValue({
            id: 28,
            name: "Mariano Andrade",
            email: "mariano@silva.com",
            role: "tutor",
            password: "senha123456",
            profilePictureURL: "URL",
            telephone: "9 2222-2221",
            about: "Sobre...",
            city: "Sao Paulo",
            createdAt: '2023-10-01',
            updatedAt: '2023-10-01',
        })

        const data = database.Usuarios.create();

        expect(data).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...newUser,
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            }),
        );
    });
})