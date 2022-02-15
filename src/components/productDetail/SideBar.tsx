import type { Category } from '../../types/category';
import type { Tag } from '../../types/tag';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styles from '../../styles/ProductDetail.module.scss';
import { TagContent } from '../../components/product/Tag';

type Props = {
  categories: Category[];
  tags: Tag[];
};

export const SideBar = ({ categories, tags }: Props) => {
  return (
    <Grid item xs={12} md={4}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.heading__content}>カテゴリー一覧</h2>
        </div>
        <div className={styles.categories}>
          <ul>
            {categories.map((category) => (
              <li>
                <a href='#'>{category.category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.heading}>
          <h2 className={styles.heading__content}>タグ一覧</h2>
        </div>
        <TagContent tags={tags} />
      </Container>
    </Grid>
  );
};
