const express = require ('express')
const book = require('./book')
const User= require('./users')
const history = require('./history')
const borrow = require('./borrow')
const wishlist = require('./wishlist')
const postWishlist= require('./postWishlist')
const Router = express.Router();

Router.use('/book', book)
Router.use('/user',User)
Router.use('/history',history)
Router.use('/borrow',borrow)
Router.use('/wishlists',wishlist)
Router.use('/wishlist',postWishlist)


module.exports = Router // export Route