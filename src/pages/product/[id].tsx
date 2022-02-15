import { GetServerSideProps } from 'next';
import { client } from '../../libs/client';
import type { Product } from '../../types/product';
import type { Category } from '../../types/category';
import type { Tag } from '../../types/tag';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import styles from '../../styles/ProductDetail.module.scss';
import { MainContent } from '../../components/productDetail/MainContent';
import { EyeCatch } from '../../components/productDetail/EyeCatch';
import { SideBar } from '../../components/productDetail/SideBar';

type Props = {
  product: Product;
  categories: Category[];
  tags: Tag[];
};

export default function BlogId({ product, categories, tags }: Props) {
  return (
    <main>
      <EyeCatch product={product} />
      <Grid container spacing={2} className={styles.main}>
        <MainContent product={product} />
        <SideBar categories={categories} tags={tags} />
      </Grid>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const productData = await client.get({
    endpoint: 'product',
    contentId: idExceptArray,
  });
  const categoryData = await client.get({ endpoint: 'product-category' });
  const tagData = await client.get({ endpoint: 'product-tag' });

  return {
    props: {
      product: productData,
      categories: categoryData.contents,
      tags: tagData.contents,
    },
  };
};
