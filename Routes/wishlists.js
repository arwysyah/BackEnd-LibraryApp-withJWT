const {getWishlist} = require ('../Controllers/wishlists')
const express = require ('express');
const router = express.Router() // manggil router


router.get('/:id',getWishlist)
module.exports = router