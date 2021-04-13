import axios from 'axios'

export default {
  getBooks: () => axios.get('/api/books'),
  addBook: book => axios.post('/api/books', book),
  getBook: id => axios.get('/api/books/' + id),
  deleteBook: id => axios.delete('/api/books/' + id)
}