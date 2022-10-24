'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      {
        numberContract: "0987654", name:
          "seeder client", typeDocument: "C.C",
        document: "090998787",
        birthDate: "1990/02/02", gender: "femenino", phone: "9898076", email: "seederClient@vanti.com",
        suscribe: "2022/02/03", unsuscribe: null, idChanel: 1, idUser: 1,
        nameProduct: "Seguro", category: "funerario"
      },
    ];
    await queryInterface.bulkInsert('clients', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});

  }
};
