'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        name: 'Lucas Silva',
        email: 'lucas@lucas.com',
        role: 'tutor',
        password: '$2a$10$dsH.527lPdwNUocvfiQl5ejroKrxy4vCz0VFTbn9cyvboi3cLiXhu',
        profilePictureURL: 'URL',
        telephone: '9 2222-2221',
        about: 'Sobre...',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria Silva',
        email: 'Maria@Maria.com',
        role: 'tutor',
        password: '$10$9jKnMU4rll.4eoeJiVId1uUIK73.O.u0lrfnTqxKTaplKwGHHuGn6 ',
        profilePictureURL: 'URL',
        telephone: '9 2222-2222',
        about: 'Sobre...',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Abrigo vila Santos',
        email: 'abrigo@santos.com',
        role: 'admin',
        password: '$10$3Fxw0hvc1dix4nlWWxh6eOHQTPXd4mwxsh0FxSPOPVlF9NTOfnKI2 ',
        profilePictureURL: 'URL',
        telephone: '9 2222-2223',
        about: 'Sobre...',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ong Maria da Silva',
        email: 'Maria@ong.com',
        role: 'admin',
        password: '$10$3Fxw0hvc1dix4nlWWxh6eOHQTPXd4mwxsh0FxSPOPVlF9NTOfnKI2 ',
        profilePictureURL: 'URL',
        telephone: '9 2222-2224',
        about: 'Sobre...',
        city: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nathalia Silva',
        email: 'nath@lima.com',
        role: 'tutor',
        password: '$10$dy5Oxyp24VhLyDxYSwyADOVJWpJ1F6RsuwsEuOrbYSHdL2LPPzQ92 ',
        profilePictureURL: null,
        telephone: null,
        about: null,
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matheus Andrade',
        email: 'matheus@a.co',
        role: 'tutor',
        password: '$10$VsAxwExF4cg.yPdH3xmpJO/eIwUbR0vYvCrMNZycptg8EJYuflWMu ',
        profilePictureURL: 'URL',
        telephone: '9 2556-6936',
        about: 'Sobre...',
        city: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ong Teste',
        email: 'ong@teste.com',
        role: 'admin',
        password: '$10$xx3xoFxLMPcWatlnOIYz1.rRF.eyFt00v5HcFXOsQe67DD.lL56h6 ',
        profilePictureURL: 'URL',
        telephone: '9 2556-6998',
        about: 'Sobre...',
        city: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ong Teste 2',
        email: 'ong@teste2.com',
        role: 'admin',
        password: '$10$xx3xoFxLMPcWatlnOIYz1.rRF.eyFt00v5HcFXOsQe67DD.lL56h6 ',
        profilePictureURL: 'URL',
        telephone: '9 2556-6910',
        about: 'Sobre...',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
