import Link from 'next/Link';
import type { Product } from '../../types/product';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styles from '../../styles/Product.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { Image } from '../../components/product/Image';
import { PageTitle } from '../../components/PageTitle';
import { DescriptionText } from '../../components/product/DescriptionText';

type Props = {
  products: Array<Product>;
};

export const ProductMain = ({ products }: Props) => {
  return (
    <div
      className={`${commonStyles.mainContainer} ${commonStyles.mainBg} ${styles.productContainer}`}
    >
      <PageTitle title='Product' />
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <Paper className={styles.l_card} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Image
                category={product.category}
                eye_catch_url={product.eye_catch.url}
              />
              <DescriptionText product={product} />
            </Grid>
          </Paper>
        </Link>
      ))}
    </div>
  );
}
