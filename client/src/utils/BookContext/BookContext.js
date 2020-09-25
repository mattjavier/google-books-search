import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  books: [],
  handleInputChange: () => { },
  handleSearchAPI: () => { },
  handleSaveBook: () => { },
  saved: [],
  handleDeleteSaved: () => { }
})

export default BookContext