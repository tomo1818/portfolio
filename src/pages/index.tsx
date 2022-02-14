import Link from 'next/link';
import type { Product } from '../types/product';
import { client } from '../libs/client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';

type Props = {
  products: Array<Product>;
};

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Home({ products }: Props) {
  console.log(products[0].id);
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
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        backgroundColor: '#1976d2',
                      }}
                    >
                      <p style={{
                        margin: '0',
                        padding: '5px 10px',
                        color: 'white',
                      }}>
                        {product.category.category}
                      </p>
                    </div>
                    <Img
                      alt='complex'
                      src={product.eye_catch.url}
                      style={{
                        objectFit: 'cover',
                        // maxHeight: "200px"
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
                      <div
                        style={{
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
                            }}
                            variant='body2'
                          >
                            <span style={{
                              color: '#cd162c',
                              content: "#",
                              fontWeight: '700',
                              marginRight: '3px',
                            }}>
                              #
                            </span>
                            {tag.tag}
                          </Typography>
                        ))}
                      </div>
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
