import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styles from '../../styles/ProductDetail.module.scss';
import tagStyles from '../../styles/Product.module.scss';
import { Product } from '../../types/product';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { TagContent } from '../../components/product/Tag';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

type Props = {
  product: Product;
};

export const MainContent = ({ product }: Props) => {
  const publishedData = product.publishedAt.split('-');
  const revisedData = product.revisedAt.split('-');
  const publishedAt =
    publishedData[0] +
    '年' +
    publishedData[1] +
    '月' +
    publishedData[2].split('T')[0] +
    '日';
  const revisedAt =
    revisedData[0] +
    '年' +
    revisedData[1] +
    '月' +
    revisedData[2].split('T')[0] +
    '日';
  return (
    <Grid
      item
      xs={12}
      md={8}
      className={`${styles.mainC} ${tagStyles.productContainer}`}
    >
      <Container className={styles.mainC__contents}>
        <h1 className={styles.mainC__contents__title}>{product.title}</h1>
        <div className={styles.mainC__contents__dateContents}>
          <div className={styles.mainC__contents__dateContents__content}>
            <AccessTimeIcon />
            <p>{publishedAt}</p>
          </div>
          <div className={styles.mainC__contents__dateContents__content}>
            <AutorenewIcon />
            <p>{revisedAt}</p>
          </div>
          <Link href={`/category/${product.category.id}`}>
            <a>
              <div className={styles.mainC__contents__dateContents__content}>
                <CreateNewFolderIcon />
                <p
                  className={
                    styles.mainC__contents__dateContents__content__button
                  }
                >
                  {product.category.category}
                </p>
              </div>
            </a>
          </Link>
        </div>
        <TagContent tags={product.tag} />
        <div
          dangerouslySetInnerHTML={{
            __html: `${product.body}`,
          }}
          className={styles.mainC__contents__body}
        />
      </Container>
    </Grid>
  );
};
