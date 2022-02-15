import Link from 'next/link';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import styles from '../styles/Common.module.scss';

import { DrawerMenu } from './Drawer';

const MenuList = ['HOME', 'ABOUT', 'PRODUCT', 'CONTACT'];

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <DrawerMenu menuList={MenuList} />
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
            {MenuList.map((text) => (
              <div className={styles.pc_only}>
                <Link href={text === 'HOME' ? '/' : '/' + text.toLowerCase()}>
                  <Button color='inherit'>{text}</Button>
                </Link>
              </div>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
