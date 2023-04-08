'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //   await queryInterface.bulkInsert('Adocoes', [
  //     {
  //       pet_id: 2,
  //       user_id: 1,
  //       adoption_date: new Date(),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     }
  // ], {});
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Adocoes', null, {});
  }
};
