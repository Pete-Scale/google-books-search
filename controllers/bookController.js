const Book = require('../models/book')

module.exports = {

  getBooks: function(req, res) {
    Book.find({})
      .then(books => res.json(books))
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  addBook: function(req, res) {
    Book.create(req.body)
      .then(book => res.json(book))
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getBook: function(req, res) {
    Book.findOne(req.params)
      .then(book => res.json(book))
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  deleteBook: function(req, res) {
    Book.findByIdAndDelete(req.params.id)
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  }
}