import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../../styles/Skill.module.scss';
import Rating from '@mui/material/Rating';

type Props = {
  rate: number;
  title: string;
  description: string;
};

export default function ActionAreaCard({ rate, title, description }: Props) {
  return (
    <div className={styles.cardContainer}>
      <Card sx={{ maxWidth: 345 }} className={styles.l_skill__card}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={'/logo/' + title.toLowerCase() + '.png'}
            alt={title.toLowerCase()}
            className={styles.l_skill__card__img}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className={styles.l_skill__card__title}
            >
              {title}
            </Typography>
            <Rating name='read-only' value={rate} readOnly />
            <Typography
              variant='body2'
              color='text.secondary'
              className={styles.l_skill__card__description}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
