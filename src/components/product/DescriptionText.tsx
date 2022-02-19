import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../../styles/Product.module.scss';
import { TagContent } from './Tag';
import { Product } from '../../types/product';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
      <Grid item xs container direction='column' spacing={{ sx: 0, md: 2 }}>
        <Grid item xs className={styles.l_card__rightContent__box}>
          <Box className={styles.l_card__rightContent__titleBox}>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={`${styles.l_card__rightContent__title} ${styles.l_card__rightContent__titleBox__child}`}
            >
              {product.title}
            </Typography>
            <div className={styles.l_card__rightContent__titleBox__child}>
              <a
                href={product.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            </div>
            <div className={styles.l_card__rightContent__titleBox__child}>
              <a
                href={product.previewUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <RemoveRedEyeIcon />
              </a>
            </div>
          </Box>
          <TagContent tags={product.tag} />
          <Box>
            <Typography
              className={styles.l_card__rightContent__description}
              variant='body2'
            >
              {product.description}
            </Typography>
          </Box>
          <Link href={`/product/${product.id}`}>
            <a className={styles.l_card__rightContent__next}>
              <Typography variant='body2'>続きを読む</Typography>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
