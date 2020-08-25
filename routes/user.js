'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

// User Controller
const userController = require(path.join(__dirname, '../controllers/user/userController'))

route.post('/login', userController.login)
route.post('/', userController.store)

route.get('/',  checkAuth, userController.index)
route.get('/:id', checkAuth, userController.show)
route.put('/:id', checkAuth, userController.update)





module.exports = route