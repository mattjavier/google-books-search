import React, { useState } from 'react'

import API from '../../utils/API'
import BookContext from '../../utils/BookContext'
import Form from '../../components/Form'
import SearchedBook from '../../components/SearchedBook'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  title: {

  }
})

const Search = () => {

  const [searchState, setSearchState] = useState({
    search: '',
    books: []
  })

  searchState.handleInputChange = event => {
    setSearchState({ ...searchState, [event.target.name]: event.target.value })
  }

  searchState.handleSearchAPI = event => {
    event.preventDefault()

    API.getBooks(searchState.search)
      .then(({ data }) => {
        console.log(data)
        setSearchState({ ...searchState, books: data, search: '' })
      })
      .catch(err => console.error(err))
  }

  searchState.handleSaveBook = bookID => {
    const saveBook = searchState.books.filter(x => x.bookID === bookID)[0]

    API.saveBook(saveBook)
      .then(() => {
        const books = searchState.books.filter(x => x.bookID !== bookID)
        setSearchState({...searchState, books })
      })
  } 

  const classes = useStyles()

  return (
    <>
      <Typography
        variant="h6"
        className={classes.title}
      >
        Search Books
      </Typography>
      <BookContext.Provider value={searchState}>
        <Form />
        {
          searchState.books.length > 0 ? (
            searchState.books.map(book => (
              <SearchedBook
                key={book.bookID}
                book={book}
                handleSaveBook={searchState.handleSaveBook}
              />
            ))
          ) : null
        }
      </BookContext.Provider>
    </>
  )
}

export default Search