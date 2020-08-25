'use strict'

module.exports = (sequelize,DataTypes) => {
  let User = sequelize.define('users',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    password: {
      type:DataTypes.STRING,
      allowNull:true
    },
    years_old: {
      type:DataTypes.INTEGER
    },
    married: {
      type:DataTypes.BOOLEAN
    }
  })  

  return User
}