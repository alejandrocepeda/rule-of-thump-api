'use strict'

module.exports = (sequelize,DataTypes) => {
  let Posts = sequelize.define('posts',{
    id: {
      type:DataTypes.INTEGER,    
      autoIncrement:true,
      primaryKey:true
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    description: {
      type:DataTypes.STRING
    },
    date:{
      type:DataTypes.DATE,
      allowNull:false,
    },    
    like_count: {
      type:DataTypes.INTEGER
    },
    dislike_count: {
      type:DataTypes.INTEGER
    },
    category_id: {
      type:DataTypes.INTEGER
    },
    image_url: {
      type:DataTypes.STRING,
    }
  })
  
  
  Posts.associate = (models) => {    
    Posts.belongsTo(models.categories,{                    
        foreignKey: 'category_id'
    })
  }
  

  return Posts
}