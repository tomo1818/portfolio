import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../theme';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Head>
          <title>ポートフォリオ</title>
          <link rel='shortcut icon' href='/favicon.svg' />
        </Head>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
