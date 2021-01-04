import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(3, 0),
      textAlign: 'center'
    },
    hero: {
      height: 640,
      width: '100%',
      padding: theme.spacing(30, 0),
      position: 'relative',
      '&::before': {
        content: '""',
        background: 'url(/images/homepage-hero.jpg) no-repeat 100%',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        opacity: 0.7,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        zIndex: '-1'
      }
    },
    actions: {
      margin: theme.spacing(5, 1),
      fontSize: 16,
    },
    heroText: {
      fontSize: 60,
      color: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold'
    }
  })
);

export default function Index() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Box className={classes.hero}>
        <Typography variant="h1" component="h1" className={classes.heroText}>
          Swap plants with fellow gardeners
        </Typography>
        <Grid item justify="space-between">
          <Button className={classes.actions} size="large" variant="outlined" href="/swaps">Find plants</Button>
          <Button className={classes.actions} size="large" variant="contained" color="primary">Sign up</Button>
        </Grid>
      </Box>
    </Grid>
  );
}
