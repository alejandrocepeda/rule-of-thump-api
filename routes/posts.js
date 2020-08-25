'use strict'

const route = require('express').Router()
const path = require('path')
const checkAuth = require(path.join(__dirname, '../middlewares/checkAuth'))

// Post Controller
const postsController = require(path.join(__dirname, '../controllers/post/postController'))


route.get('/',  postsController.index)
route.get('/:id', postsController.show)

module.exports = route