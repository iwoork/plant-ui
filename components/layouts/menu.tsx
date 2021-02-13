import {
  AuthTokens,
  getServerSideAuth,
  useAuth,
  useAuthFunctions,
} from "../../auth";
import { fade, makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import EcoIcon from '@material-ui/icons/Eco'
import { GetServerSideProps } from "next";
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
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
  button: {
    [theme.breakpoints.down('md')]: {
      fontSize: 10
    }
  }
}))

interface IMenu {
  initialAuth?: AuthTokens
}

const MainMenu = (props: IMenu) => {
  const classes = useStyles()
  const { initialAuth } = props
  const auth = useAuth(initialAuth || null);
  const { login, logout } = useAuthFunctions();

  console.log('i', initialAuth);
  console.log(auth);
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
          {auth ? (
            <Button onClick={() => logout()} className={classes.button} color="primary" variant="contained">Sign out</Button>
          ) : (
              <Button onClick={() => login()} className={classes.button} color="primary" variant="contained">Sign in</Button>
            )}
        </Grid>
      </Toolbar>
    </AppBar >
  )
}

export const getServerSideProps: GetServerSideProps<{
  initialAuth: AuthTokens;
}> = async (context) => {
  const initialAuth = getServerSideAuth(context.req);

  return { props: { initialAuth } };
};

export default MainMenu