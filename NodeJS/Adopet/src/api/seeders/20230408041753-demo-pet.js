'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pets', [
      {
        name: 'Max',
        age: 2,
        user_id: 3,
        bearing: 'Porte Medio',
        temperament: 'Docil',
        photo: 'URL',
        adopted_pet: 0,
        UF: 'SP',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tobi',
        age: 5,
        user_id: 4,
        bearing: 'Porte Grande',
        temperament: 'Docil e Calmo',
        photo: 'URL',
        adopted_pet: 1,
        UF: 'SP',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dunga',
        age: '3 anos',
        user_id: 4,
        bearing: 'Porte medio',
        temperament: 'Docil e Carinhoso',
        photo: 'URL',
        adopted_pet: false,
        UF: 'RJ',
        city: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Princesa',
        age: '5 meses',
        user_id: 3,
        bearing: 'Porte pequeno',
        temperament: 'Carinhosa e Manhosa',
        photo: 'URL',
        adopted_pet: false,
        UF: 'SP',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pets', null, {});
  }
};
