'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

// Users Votes Controller
const usersVotesController = require(path.join(__dirname, '../controllers/usersVotes/usersVotesController'))

route.post('/', checkAuth, usersVotesController.store)
route.get('/',  checkAuth,usersVotesController.index)
route.get('/:id', checkAuth, usersVotesController.show)

route.delete('/:id', checkAuth, usersVotesController.destroy)
route.put('/:id', checkAuth, usersVotesController.update)

module.exports = route