import React from 'react'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    marginBottom: 10
  },
  image: {
    height: 140,
  },
  button: {
    color: '#3097a5',
    textDecoration: 'none'
  }
})

const SavedBook = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        image={props.book.image}
        title={props.book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.book.title}
        </Typography>
        <Typography gutterBottom variant="h6">
          Written By: {props.book.authors}
        </Typography>
        <Typography gutterBottom variant="caption">
          Type: {props.book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          className={classes.button}
          onClick={() => props.handleDeleteSaved(props.book._id)}>
            Delete
        </Button>
        <a href={props.book.link} target="_blank" rel="noopener noreferrer" className={classes.button}>
          <Button
            size="small"
            className={classes.button}
          >
            View
          </Button>
        </a>
      </CardActions>
    </Card>
  )
}

export default SavedBook