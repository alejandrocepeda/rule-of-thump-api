const Post = require('../models').posts
const Category = require('../models').categories
const abstractService = require('./abstract/abstractService')

class PostService extends abstractService {

    constructor(){
        super()

        const relations = {        
            
            include: [
                {
                    model: Category
                }
            ]
        } 

        this.setRelations(relations)
        this.setModel(Post)
        
    }

}

module.exports = PostService