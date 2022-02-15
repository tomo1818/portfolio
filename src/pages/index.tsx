import Link from 'next/link';
import type { Product } from '../types/product';
import { client } from '../libs/client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type Props = {
  products: Array<Product>;
};

export default function Home({ products }: Props) {
  return (
    <div>
      <Typography
        variant='h2'
        component='h1'
        align='center'
        style={{ margin: '20px auto' }}
      >
        Products
      </Typography>
      <ul>
        {products.map((product) => (
          <Link href={`/product/${product.id}`}>
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                marginBottom: '30px',
                maxWidth: 960,
                flexGrow: 1,
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  opacity: '0.8',
                  transition: 'all 0.3s',
                },
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ButtonBase
                    style={{
                      margin: '0 auto',
                      display: 'flex',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: 'primary.main',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                      }}
                    >
                      <p
                        style={{
                          margin: '0',
                          padding: '5px 10px',
                          color: 'white',
                        }}
                      >
                        {product.category.category}
                      </p>
                    </Box>
                    <Img
                      alt='complex'
                      src={product.eye_catch.url}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        {product.tag.map((tag) => (
                          <Typography
                            sx={{
                              cursor: 'pointer',
                              margin: '0 4px 8px 0',
                              backgroundColor: '#f7f7f7',
                              border: '1px solid transparent',
                              borderColor: '#eee',
                              borderRadius: '6px',
                              color: '#333',
                              display: 'inline-block',
                              lineHeight: '1',
                              padding: '4px 8px',
                              textDecoration: 'none',
                              verticalAlign: 'top',
                              whiteSpace: 'nowrap',
                              '&::before': {
                                color: '#cd162c',
                                content: '"#"',
                                fontWeight: '700',
                                marginRight: '3px',
                              },
                            }}
                            variant='body2'
                          >
                            {tag.tag}
                          </Typography>
                        ))}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            lineHeight: '1.75',
                            marginBottom: '20px',
                          }}
                          variant='body2'
                        >
                          {product.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          textAlign: 'right',
                        }}
                      >
                        <Typography variant='body2'>続きを読む</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'product' });

  return {
    props: {
      products: data.contents,
    },
  };
};
