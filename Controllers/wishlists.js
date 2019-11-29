
const Model = require('../Models/wishlists');
const form = require('../Helpers/resForm')

module.exports = {

    getWishlist:(req,res)=>{
            const id = req.params.id
            console.log(id)
            Model.getWishlist(parseInt(id))
                .then(results=>form.getWishlist(res,results,200))
                .catch(error=> console.log(error))
    
}
        }