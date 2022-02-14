import { GetServerSideProps } from 'next';
import { client } from '../../libs/client';
import type { Product } from '../../types/product';

type Props = {
  product: Product;
};

export default function BlogId({ product }: Props) {
  console.log(product.category.category); // category名
  console.log(product.tag); // tag配列
  return (
    <main>
      <div className='eye_catch'>
        <img
          src={product.eye_catch.url}
        />
      </div>
      <h1>{product.title}</h1>
      <p>{product.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${product.body}`,
        }}
      />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'product',
    contentId: idExceptArray,
  });

  return {
    props: {
      product: data,
    },
  };
};
