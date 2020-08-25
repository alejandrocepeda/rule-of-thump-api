'use strict'

module.exports = (sequelize,DataTypes) => {
    let UserVotes = sequelize.define('users_votes',{
        id: {
            type:DataTypes.INTEGER,    
            autoIncrement:true,
            primaryKey:true
        },
        post_id: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        user_id: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        like_count:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        dislike_count:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    })  

    UserVotes.associate = (models) => {    
        UserVotes.belongsTo(models.users,{                    
            foreignKey: 'user_id'
        })

        UserVotes.belongsTo(models.posts,{                    
            foreignKey: 'post_id'
        })
    }

    return UserVotes
}