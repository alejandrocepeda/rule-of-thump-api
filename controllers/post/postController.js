const PostsService = require('../../services/postsService')

async function index (req, res, next) {
  
    postsService = new PostsService

    try {
        
        const posts = await postsService.showAll({order: [
          ['id', 'ASC']
      ],})
        
        return res.showAll(posts,200)
    }
    catch (error){
      next(error)
    }
}

async function show (req, res, next) {
  
  postsService = new PostsService

  try{
    const user = await postsService.getOne({where: {id:req.params.id}})

    return res.showOne(user,200)
  }
  catch (error ){
    next(error)
  }
}


module.exports = {
  index,
  show
}