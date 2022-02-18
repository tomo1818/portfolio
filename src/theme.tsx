import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#cd162c',
    },
    secondary: {
      // main: '#707593', グレー
      main: '#007FFF', // 青
      // main: '#333', // 黒
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
