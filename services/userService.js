const User = require('../models').users
const abstractService = require('./abstract/abstractService')

class UserService extends abstractService {

    constructor(){
        super()
        
        const relations = {        
            
        }    

        this.setRelations(relations)
        this.setModel(User)
        
    }

}

module.exports = UserService