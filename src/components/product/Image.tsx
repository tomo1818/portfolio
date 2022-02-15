import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import styles from '../../styles/Product.module.scss';

type Props = {
  category: string;
  eye_catch_url: string;
};

export const Image = ({ category, eye_catch_url }: Props) => {
  return (
    <Grid item xs={12} md={6} className={styles.l_card__leftContent}>
      <ButtonBase className={styles.l_card__leftContent__imageBox}>
        <Box className={styles.l_card__leftContent__categoryBox}>
          <p className={styles.l_card__leftContent__categoryText}>{category}</p>
        </Box>
        <img
          className={styles.l_card__leftContent__image}
          alt='complex'
          src={eye_catch_url}
        />
      </ButtonBase>
    </Grid>
  );
};
