import type { Product } from '../types/product';
import { client } from '../libs/client';
import { ProductMain } from '../components/product/ProductMain';

type Props = {
  products: Array<Product>;
};

export default function Product({ products }: Props) {
  return (
    <>
      <ProductMain products={products} />
    </>
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
      categories: categoryData.contents,
      tags: tagData.contents,
    },
  };
};
