const express = require ('express')
const book = require('./book')
const User= require('./users')
const wishlist = require('./wishlists')
const Router = express.Router();

Router.use('/book', book)
Router.use('/user',User)
Router.use('/wishlists',wishlist)


module.exports = Router // export Route