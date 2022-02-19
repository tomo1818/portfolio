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
        <Paper key={product.id} className={styles.l_card} sx={{ p: 2 }}>
          <Grid
            container
            className={styles.l_card__grid}
            spacing={{ sx: 0, md: 2 }}
          >
            <Image
              product={product}
              category={product.category}
              eye_catch_url={product.eye_catch.url}
            />
            <DescriptionText product={product} />
          </Grid>
        </Paper>
      ))}
    </div>
  );
};
