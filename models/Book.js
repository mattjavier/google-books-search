const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: [ String ],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
}, { timestamps: true })

module.exports = model('Book', Book)