import React, { useState, useEffect } from 'react'

import API from '../../utils/API'
import BookContext from '../../utils/BookContext'
import SavedBook from '../../components/SavedBook'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {

  }
})

const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  savedState.handleDeleteSaved = id => {
    API.deleteBook(id)
      .then(() => {
        let saved = savedState.saved.fitler(book => book._id !== id)
        setSavedState({ ...savedState, saved })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    API.getSavedBooks()
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  const classes = useStyles()

  return (
    <>
      <Typography
        variant="h6"
        className={classes.title}
      >
        Saved Books
      </Typography>
      <BookContext.Provider value ={savedState}>
        {
          savedState.saved.length > 0 ? (
            savedState.saved.map(book => (
              <SavedBook
                key={book.bookID}
                book={book}
                handleDeleteSaved={savedState.handleDeleteSaved}
              />
            ))
          ) : null
        }
      </BookContext.Provider>
    </>
  )
}

export default Saved