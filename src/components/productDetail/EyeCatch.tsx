import { Product } from '../../types/product';
import Box from '@mui/material/Box';
import styles from '../../styles/ProductDetail.module.scss';

type Props = {
  product: Product;
};

export const EyeCatch = ({ product }: Props) => {
  return (
    <Box className={styles.eyeCatchContainer}>
      <Box className={styles.eyeCatchContainer__box}>
        <img
          src={product.eye_catch.url}
          className={styles.eyeCatchContainer__img}
        />
      </Box>
    </Box>
  );
};
