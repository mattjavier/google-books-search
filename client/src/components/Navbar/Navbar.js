import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none'
  },
  appBar: {
    backgroundColor: '#3097a5'
  }
})

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar
      position="static"
      className={classes.appBar}
    >
      <Toolbar>
        <Typography
          variant="h4"
          className={classes.title}
        >
          Google Books
        </Typography>
        <Link to="/" className={classes.link}>
          <Button color="inherit">Search</Button>
        </Link>
        <Link to="/saved" className={classes.link}>
          <Button color="inherit">Saved</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar