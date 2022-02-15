import Link from 'next/link';
import type { Product } from '../types/product';
import { client } from '../libs/client';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styles from '../styles/Product.module.scss';
import { Image } from '../components/product/Image';
import { PageTitle } from '../components/PageTitle';
import { DescriptionText } from '../components/product/DescriptionText';

type Props = {
  products: Array<Product>;
};

export default function Home({ products }: Props) {
  return (
    <div className={styles.productContainer}>
      <PageTitle title='Products' />
      {products.map((product) => (
        <Link href={`/product/${product.id}`}>
          <Paper className={styles.l_card} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Image
                category={product.category.category}
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
