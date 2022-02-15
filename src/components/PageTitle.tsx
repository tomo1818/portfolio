import Typography from '@mui/material/Typography';
import styles from '../styles/Common.module.scss';

type Props = {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Typography
      variant='h2'
      component='h1'
      align='center'
      className={styles.pageTitle}
    >
      { title }
    </Typography>
  );
};
