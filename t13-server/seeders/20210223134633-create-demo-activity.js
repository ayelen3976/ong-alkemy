'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Activities', [{
        name: 'Excursión',
        image: 'https://www.viatigre.com.ar/photos/p/10/pyoan9qdl7wbju.jpg',
        content: 'Paseo por el Museo de Arte en la ciudad de Tigre',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities', null, {});
     
  }
};
