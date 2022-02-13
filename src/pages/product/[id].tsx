import { GetServerSideProps } from 'next';
import { client } from '../../libs/client';
import type { Product } from '../../types/product';

type Props = {
  product: Product;
};

export default function BlogId({ product }: Props) {
  return (
    <main>
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

// // 静的生成のためのパスを指定します
// export const getStaticPaths = async () => {
//   const data = await client.get({ endpoint: 'product' });

//   const paths = data.contents.map((content) => `/product/${content.id}`);
//   return { paths, fallback: false };
// };

// // データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const data = await client.get({ endpoint: 'product', contentId: id });

//   return {
//     props: {
//       product: data,
//     },
//   };
// };
