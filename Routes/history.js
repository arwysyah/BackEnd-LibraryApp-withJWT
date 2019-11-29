const {postHistory} = require ('../Controllers/history')
const express = require ('express');
const router = express.Router() // manggil router


router.post('/',postHistory)
module.exports = router