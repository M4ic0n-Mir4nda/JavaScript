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
        adopted_pet: 0,
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
