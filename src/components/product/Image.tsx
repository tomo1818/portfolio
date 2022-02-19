import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Link from 'next/link';
import styles from '../../styles/Product.module.scss';
import { Category } from '../../types/category';
import { Product } from '../../types/product';

type Props = {
  product: Product;
  category: Category;
  eye_catch_url: string;
};

export const Image = ({ product, category, eye_catch_url }: Props) => {
  return (
    <Grid item xs={12} md={6} className={styles.l_card__leftContent}>
      <ButtonBase className={styles.l_card__leftContent__imageBox}>
        <Link href={`/category/${category.id}`}>
          <a className={styles.l_card__leftContent__categoryBox}>
            <p className={styles.l_card__leftContent__categoryText}>
              {category.category}
            </p>
          </a>
        </Link>
        <Link href={`/product/${product.id}`}>
          <a>
            <img
              className={styles.l_card__leftContent__image}
              alt='complex'
              src={eye_catch_url}
            />
          </a>
        </Link>
      </ButtonBase>
    </Grid>
  );
};
