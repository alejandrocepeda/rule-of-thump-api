const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserService = require('../../services/userService')
const { config } = require('../../config/index')

async function store (req, res, next) {

  userService = new UserService

  try{  

    const user = await userService.showAll({where:{email: req.body.email}})

    if (user.length >= 1) {
      
      return res.success({
        message:'User is already exists',
        data:user[0]
      },422)    

    }
    else{    

      const hash = await bcrypt.hash(req.body.password, 10)

      let toCreate = {
        name: req.body.name,
        email: req.body.email,        
        years_old: req.body.years_old,      
        married: req.body.married,      
        password:hash
      }
      
      const user = await userService.Create(toCreate)

      return res.success({data:user,message:'User is created'},200)    
    }
  }
  catch (error){    
    next(error)
  }
}

async function index (req, res, next) {
  
  userService = new UserService

  try {
      
      let users = []
      users = await userService.showAll({})
      
      return res.showAll(users,200)
  }
  catch (error){
    next(error)
  }
}

async function show (req, res, next) {
  
  userService = new UserService

  try{
    const user = await userService.getOne({where: {id:req.params.id}})

    return res.showOne(user,200)
  }
  catch (error ){
    next(error)
  }
}



async function login (req, res) {  

  userService = new UserService

  try{

    
    const user = await userService.showAll({where:{email: req.body.email}})
    
    
    if (user.length == 0){
      return res.error({
        message:'Authentication failed.'
      },401)
    }

    const result = await bcrypt.compare(req.body.password, user[0].password)

    if (!result){
      return res.error({
        message:'Authentication failed.'
      },401)
    }

    
    let payLoad = {
      email: user[0].email,
      name:user[0].name
    }

    const token = jwt.sign(payLoad,
    config.authJwtSecret,
      {
          expiresIn: '1h'
      }
    )

    return res.success({
      message:'Authentication is successfuly, to enjoy',
      token:token,
      user:user[0]
    },200)

  }
  catch (error){
    return res.error(`Authentication failed : ${error}`,401)    
  }
}

async function update (req, res, next) {

  
  let toUpdate = {
    name: req.body.name,
    email: req.body.email,        
    years_old: req.body.years_old,      
    married: req.body.married,    
  }
  

  if (req.body.password){
    const hash = await bcrypt.hash(req.body.password, 10)

    toUpdate.password = hash
  }

  toUpdate = _(toUpdate).omit(_.isUndefined).omit(_.isNull).value(); 

  userService = new UserService

  try{
    const user = await userService.Update({where: {id:req.params.id}},toUpdate)

    return res.success({
      message:'User is updated',
      data:user
    },200)
  }
  catch (error){
    next(error)
  }
}




module.exports = {
  index,
  update,
  show,  
  store,
  login
}