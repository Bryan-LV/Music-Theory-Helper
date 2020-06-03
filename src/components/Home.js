import React from 'react'
import { Button, Grid, Card, CardContent, Typography, CardActions, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Home(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="stretch">
      <Grid item sm={12} md={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4">
              Scales
            </Typography>
            <Typography variant="body2" component="p">
              Find any scale for any note.
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{ color: 'white' }} to="/scales">
              <Button color="primary" variant="contained">Go</Button>
            </Link>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={12} md={4}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4">
              Chord Detection
            </Typography>
            <Typography variant="body2" component="p">
              Find out what chord you are playing by it's individual notes.
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{ color: 'white' }} to="/chordDetection">
              <Button color="primary" variant="contained">Go</Button>
            </Link>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
