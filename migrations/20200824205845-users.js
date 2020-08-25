'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    return queryInterface.createTable('users',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type:Sequelize.STRING,
        allowNull:false
      },
      email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      password: {
        type:Sequelize.STRING
      },
      years_old: {
        type:Sequelize.INTEGER
      },
      married: {
        type:Sequelize.BOOLEAN
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
