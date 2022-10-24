"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      {
        businessName: "Contratista 1",
        nit: "321421",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        businessName: "Contratista 2",
        nit: "434324",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("contractors", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contractors", null, {});
  },
};
