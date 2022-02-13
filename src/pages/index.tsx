import Link from 'next/link';
import type { Product } from '../types/product';
import { client } from '../libs/client';

type Props = {
  products: Array<Product>;
};

export default function Home({ products }: Props) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>{product.title}</a>
            </Link>
          </li>
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
