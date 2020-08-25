
const UsersVotesService = require('../../services/usersVotesService')
const PostsService = require('../../services/postsService')


async function store (req, res, next) {

    usersVotesService = new UsersVotesService
    postsService = new PostsService

    try{  

        let toCreate = {
            post_id: req.body.post_id,
            user_id: req.body.user_id,        
            like_count:req.body.like_count,
            dislike_count:req.body.dislike_count,
        }
        
        const user = await usersVotesService.Create(toCreate)

        const post = await postsService.getOne({where: {id:req.body.post_id}})
        
        if (req.body.like_count != null){
            post.like_count = (req.body.like_count + post.like_count)
        }

        if (req.body.dislike_count != null){
            post.dislike_count = (req.body.dislike_count + post.dislike_count)
        }

        post.save()
        

        return res.success({data:post,message:'User Votes is created'},200)    
        
    }
    catch (error){    
        next(error)
    }
}

async function index (req, res, next) {
    
   
    usersVotesService = new UsersVotesService

    try {
        
        const userVotes = await usersVotesService.showAll({})
        
        return res.showAll(userVotes,200)
    }
    catch (error){
        next(error)
    }
}

async function show (req, res, next) {
  
    usersVotesService = new UsersVotesService

    try{
        const userVotes = await usersVotesService.getOne({where: {id:req.params.id}})

        return res.showOne(userVotes,200)
    }
    catch (error ){
        next(error)
    }
}


async function update (req, res, next) {

  
    let toUpdate = {
        post_id: req.body.post_id,
        user_id: req.body.user_id,        
        like_count:req.body.like_count,
        dislike_count:req.body.dislike_count,
    }

    toUpdate = req.omit(toUpdate)

    usersVotesService = new UsersVotesService

    try{
        const userVotes = await usersVotesService.Update({where: {id:req.params.id}},toUpdate)

        
        return res.success({
        message:'User Votes is updated',
        data:userVotes
        },200)
    }
    catch (error){
        next(error)
    }
}


async function destroy (req, res, next) {
  
    usersVotesService = new UsersVotesService

    try{
        
        await usersVotesService.Delete({where: {id:req.params.id}})
        
        return res.success({
            message:'User Votes is deleted'
        },200)
    }
    catch(error){
        next(error)
    }
}
module.exports = {
  index,
  show,  
  store,
  update,
  destroy
}