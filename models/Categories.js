'use strict'

module.exports = (sequelize,DataTypes) => {
  let Category = sequelize.define('categories',{
    id: {
        type:DataTypes.INTEGER,    
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    }
  })  

  return Category
}