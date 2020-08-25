const UsersVotes = require('../models').users_votes
const abstractService = require('./abstract/abstractService')

class UsersVotesService extends abstractService {

    constructor(){
        super()

        const relations = {} 

        this.setRelations(relations)
        this.setModel(UsersVotes)
        
    }

}

module.exports = UsersVotesService