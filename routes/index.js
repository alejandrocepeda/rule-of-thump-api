'use strict'

const path = require('path')
const route = require('express').Router()

//route.use('/auth', require(path.join(__dirname, '/auth')))

route.use('/users', require(path.join(__dirname, '/user')))

route.use('/posts', require(path.join(__dirname, '/posts')))
route.use('/users-votes', require(path.join(__dirname, '/usersVotes')))


module.exports = route