import {
  AuthTokens,
  getServerSideAuth,
  useAuth,
  useAuthFunctions,
} from "../../auth";
import { fade, makeStyles } from '@material-ui/core/styles'

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import EcoIcon from '@material-ui/icons/Eco'
import { GetServerSideProps } from "next";
import Grid from '@material-ui/core/Grid'
import IconButton from "@material-ui/core/IconButton";
import InputBase from '@material-ui/core/InputBase'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  console.log('i', initialAuth);
  console.log(auth);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={() => logout()} >Logout</MenuItem>
    </Menu>
  );

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
            <>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </>
          ) : (
              <Button onClick={() => login()} className={classes.button} color="primary" variant="contained">Sign in</Button>
            )}
        </Grid>
      </Toolbar>
      {renderMenu}
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