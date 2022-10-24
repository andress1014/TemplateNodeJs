"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      { name: "Ventas", createdAt: new Date(), updatedAt: new Date() },
      { name: "Retenciones", createdAt: new Date(), updatedAt: new Date() },
      { name: "BackOffice", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Administrador Contratista",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Administrador Vanti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Supervisor Contratista",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Dispacher", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Servicio al Cliente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("roles", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
