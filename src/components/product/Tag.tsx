import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../../styles/Product.module.scss';
import { Tag } from '../../types/tag';
import Link from 'next/link';


type Props = {
  tags: Tag[];
};

export const TagContent = ({ tags }: Props) => {
  return (
    <Box className={styles.l_card__rightContent__tagBox}>
      {tags.map((tag) => (
        <Link key={tag.tag} href={`/tag/${tag.id}`}>
          <Typography
            className={styles.l_card__rightContent__tagName}
            variant='body2'
          >
            {tag.tag}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};
