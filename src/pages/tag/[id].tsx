import type { Product } from '../../types/product';
import { client } from '../../libs/client';
import { ProductMain } from '../../components/product/ProductMain';

type Props = {
  products: Array<Product>;
};

export default function CategoryId({ products }: Props) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (products.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <>
      <ProductMain products={products} />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'product-tag' });

  const paths = data.contents.map((content: any) => `/tag/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: 'product',
    queries: { filters: `tag[contains]${id}` },
  });

  return {
    props: {
      products: data.contents,
    },
  };
};
