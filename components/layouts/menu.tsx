import React from 'react'

import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import EcoIcon from '@material-ui/icons/Eco'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  appbar: {
    margin: theme.spacing(0),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
  },
  logo: {
    fontSize: 28,
  },
  sitename: {
    fontSize: 18,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const MainMenu = () => {
  const classes = useStyles()

  return (
    <AppBar color="secondary" className={classes.appbar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Grid className={classes.brand}>
          <EcoIcon className={classes.logo} />
          <Typography className={classes.sitename}>
            Swap Plant
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>
        <Grid>
          <Button color="primary" variant="contained" href="/api/auth/signin">Sign in</Button>
        </Grid>
      </Toolbar>
    </AppBar >
  )
}

export default MainMenu