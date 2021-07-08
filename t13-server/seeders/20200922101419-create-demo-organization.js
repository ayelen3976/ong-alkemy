'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Organizations', [{
      name: 'Ong de prueba',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      description: 'Descripción de organización de prueba 1',
      phone: 123456,
      address: 'Dirección demo',
      welcomeText: 'Bienvenido a organización demo',
      web: 'www.somosmas.com.ar',
      facebook: 'https://www.facebook.com/corpsomosmas/',
      linkedin: 'https://www.linkedin.com/in/Somos_mas/',
      instagram: 'https://www.instagram.com/fundacionsomosmas.ong/',
      createdAt: new Date,
      updatedAt: new Date
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
