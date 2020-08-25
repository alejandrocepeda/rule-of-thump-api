'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('posts',{
      id: {
        type:Sequelize.INTEGER,    
        autoIncrement:true,
        primaryKey:true
      },
      title: {
        type:Sequelize.STRING,
        allowNull:false
      },
      description: {
        type:Sequelize.STRING
      },
      date:{
        type:Sequelize.DATE,
        allowNull:false,
      },      
      like_count: {
        type:Sequelize.INTEGER
      },
      dislike_count: {
        type:Sequelize.INTEGER
      },
      category_id: {
        type:Sequelize.INTEGER
      },
      image_url: {
        type:Sequelize.STRING,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
