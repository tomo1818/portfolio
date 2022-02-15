import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../../styles/Product.module.scss';
import { TagContent } from './Tag';
import { Product } from '../../types/product';

type Props = {
  product: Product;
};

export const DescriptionText = ({ product }: Props) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sm
      container
      className={styles.l_card__rightContent}
    >
      <Grid item xs container direction='column' spacing={2}>
        <Grid item xs>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={styles.l_card__rightContent__title}
          >
            {product.title}
          </Typography>
          <TagContent tags={product.tag} />
          <Box>
            <Typography
              className={styles.l_card__rightContent__description}
              variant='body2'
            >
              {product.description}
            </Typography>
          </Box>
          <Box className={styles.l_card__rightContent__next}>
            <Typography variant='body2'>続きを読む</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
