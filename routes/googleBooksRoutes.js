const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/gbs/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data }) => data.items.map(book => ({
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      title: book.volumeInfo.title
    })))
    .then(apiBooks => Book.find()
      .then(book => apiBooks.filter(data => 
        book.every(dbData => dbData._id !== data._id)))
        )
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router