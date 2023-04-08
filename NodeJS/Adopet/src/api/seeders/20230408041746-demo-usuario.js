'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        name: 'Lucas Silva',
        email: 'lucas@lucas.com',
        role: 'tutor',
        password: 'luca321',
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
        password: 'maria963',
        profilePictureURL: 'URL',
        telephone: '9 2222-2222',
        about: 'Sobre...',
        city: 'Sao Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Abrigo vila Santos',
        email: 'Maria@Maria.com',
        role: 'admin',
        password: 'abrigosantos123',
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
        password: 'ong123',
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
        password: 'nath123',
        profilePictureURL: null,
        telephone: null,
        about: null,
        city: 'Sao Paulo',
        createdA: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matheus Andrade',
        email: 'mtheus@a.co',
        role: 'tutor',
        password: 'matheus203654',
        profilePictureURL: 'URL',
        telephone: '9 2556-6936',
        about: 'Sobre...',
        city: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ong Teste',
        emai: 'ong@teste.com',
        role: 'admin',
        password: 'ongteste123',
        profilePictureURL: 'URL',
        telephone: '9 2556-6998',
        about: 'Sobre...',
        city: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
