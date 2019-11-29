const express = require ('express')
const book = require('./book')
const User= require('./users')
const wishlist = require('./wishlists')
const history = require('./history')
const Router = express.Router();

Router.use('/book', book)
Router.use('/user',User)
Router.use('/wishlists',wishlist)
Router.use('/history',history)


module.exports = Router // export Route