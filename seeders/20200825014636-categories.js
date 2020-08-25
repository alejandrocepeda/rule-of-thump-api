'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.bulkInsert('categories', [{
        id:1,
        name: 'Entertainment'
      }], {}),
      queryInterface.bulkInsert('categories', [{
        id:2,
        name: 'Business'
      }], {}),
      queryInterface.bulkInsert('categories', [{
        id:3,
        name: 'Politics'
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('categories', null, {});
  }
};
