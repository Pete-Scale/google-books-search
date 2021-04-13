const router = require('express').Router()
const bookController = require('../controllers/bookController')

router.route('/api/books')
  .get(bookController.getBooks)
  .post(bookController.addBook)

router.route('/api/books/:id')
  .get(bookController.getBook)
  .delete(bookController.deleteBook)

module.exports = router