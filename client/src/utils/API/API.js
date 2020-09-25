import axios from 'axios'

const API = {
  getBooks: search => axios.get(`/api/gbs/${search}`),
  getSavedBooks: () => axios.get('/api/books'),
  saveBook: book => axios.post('/api/books', book),
  deleteBookL: id => axios.delete(`/api/books/${id}`)
}

export default API