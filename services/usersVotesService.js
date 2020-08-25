const UsersVotes = require('../models').users_votes
const User = require('../models').users
const Post = require('../models').posts
const abstractService = require('./abstract/abstractService')

class UsersVotesService extends abstractService {

    constructor(){
        super()

       

        const relations = {        
            
            include: [
                {
                    model: User
                },
                {
                    model: Post
                }
            ]
        } 


        this.setRelations(relations)
        this.setModel(UsersVotes)
        
    }

}

module.exports = UsersVotesService