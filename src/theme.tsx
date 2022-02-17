import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#cd162c',
    },
    secondary: {
      // main: '#707593',
      main: '#007FFF',
      // main: '#333',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    // headingBg: {
    //   default: '#f7f7f7'
    // }
  },
});

export default theme;
