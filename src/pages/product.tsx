import Link from 'next/link';
import type { Product } from '../types/product';
import { client } from '../libs/client';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import styles from '../styles/Product.module.scss';
import { TagContent } from '../components/product/tag';

type Props = {
  products: Array<Product>;
};

export default function Home({ products }: Props) {
  return (
    <div style={{
      padding: '0 0 30px',
      backgroundImage: "url(http://talking-ultrasuede.jp/wordpress/wp-content/themes/ultrasuede/src/images/bg.jpg)"
    }}>
      <Typography
        variant='h2'
        component='h1'
        align='center'
        sx={{ padding: '20px' }}
      >
        Products
      </Typography>
      {products.map((product) => (
        <Link href={`/product/${product.id}`}>
          <Paper className={styles.l_card} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} className={styles.l_card__leftContent}>
                <ButtonBase className={styles.l_card__leftContent__imageBox}>
                  <Box className={styles.l_card__leftContent__categoryBox}>
                    <p className={styles.l_card__leftContent__categoryText}>
                      {product.category.category}
                    </p>
                  </Box>
                  <img
                    className={styles.l_card__leftContent__image}
                    alt='complex'
                    src={product.eye_catch.url}
                  />
                </ButtonBase>
              </Grid>
              <Grid
                item
                xs={6}
                sm
                container
                className={styles.l_card__rightContent}
              >
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='h2'
                      className={styles.l_card__rightContent__title}
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      {product.title}
                    </Typography>
                    <TagContent tags={product.tag} />
                    <Box>
                      <Typography
                        className={styles.l_card__rightContent__description}
                        variant='body2'
                      >
                        {product.description}
                      </Typography>
                    </Box>
                    <Box className={styles.l_card__rightContent__next}>
                      <Typography variant='body2'>続きを読む</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      ))}
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'product' });
  const categoryData = await client.get({ endpoint: 'product-category' });
  const tagData = await client.get({ endpoint: 'product-tag' });

  return {
    props: {
      products: data.contents,
      categories: categoryData,
      tags: tagData,
    },
  }
}
