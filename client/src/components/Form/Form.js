import React, { useContext } from 'react'

import BookContext from '../../utils/BookContext'

import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    backgroundColor: '#3097a5'
  }
})

const Form = () => {
  const {
    search,
    handleInputChange,
    handleSearchAPI
  } = useContext(BookContext)

  return (
    <form onSubmit={handleSearchAPI}>
      <TextField
        label="Search"
        variant="filled-basic"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
      <p>
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          onClick={handleSearchAPI}
          className={classes.button}
        >
          Search
        </Button>
      </p>
    </form>
  )
}

export default Form