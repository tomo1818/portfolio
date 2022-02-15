import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../../styles/Product.module.scss';
import { Tag } from '../../types/tag';

type Props = {
  tags: Tag[];
};

export const TagContent = ({ tags }: Props) => {
  return (
    <Box className={styles.l_card__rightContent__tagBox}>
      {tags.map((tag) => (
        <Typography
          key={tag.tag}
          className={styles.l_card__rightContent__tagName}
          variant='body2'
        >
          {tag.tag}
        </Typography>
      ))}
    </Box>
  );
};
