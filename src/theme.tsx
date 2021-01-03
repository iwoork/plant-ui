import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      'Poppins',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontWeight: 300
    }
  },
  palette: {
    primary: {
      main: '#2a3a30',
    },
    secondary: {
      main: '#325d41',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#b48125',
    },
  },
});
export default theme;
