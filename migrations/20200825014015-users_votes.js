'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users_votes',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      post_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      user_id: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      like_count:{
        type:Sequelize.BOOLEAN,
        allowNull:false
      },
      dislike_count:{
        type:Sequelize.BOOLEAN,
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_votes');
  }
};
