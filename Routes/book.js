const express = require ('express');
const Router = express.Router() // manggil router
const bookController = require ('../Controllers/book');
const auth = require('../Helpers/Middleware/auth')

Router.get('/',bookController.getAll);

Router.get('/:id', bookController.getById)
Router.get('/status/:status',bookController.getByStatus);
Router.get('/search/genre/:genre',bookController.getByGenre);
Router.get('/genre/genre',bookController.getGenre)
Router.get('/status/status/all',bookController.getStatus)
Router.get('/filter/books/search/:title',bookController.getTitle)
Router.post('/',bookController.postBooks);
Router.delete('/:id', bookController.deleteBooks);
Router.put('/:id',bookController.putBooks);
Router.put('/:id',bookController.updateBooks)


module.exports = Router
