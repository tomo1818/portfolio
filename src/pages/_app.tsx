import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp
