'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [
      { name: 'Telefonico', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Puerta a Puerta', createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('chanels', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chanels', null, {});
  }
};
