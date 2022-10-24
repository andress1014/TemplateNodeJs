'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      { email: "userSeeder@vanti.com", name: "user Seeder", password: "1234567", document: "0989878", idChanel: 1, idRole: 1, idContractor: 1, phone: "3232123213", createdAt: new Date(), updatedAt: new Date() },

    ];
    await queryInterface.bulkInsert('users', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
