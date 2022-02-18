import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import tagStyles from '../../styles/Product.module.scss';
import type { Intern } from '../../types/intern';

export const TimeLine = ({
  date,
  title,
  eventDesc,
  tags,
  icon,
}: Intern) => {
  return (
    <>
      <VerticalTimelineElement
        className='vertical-timeline-element--work vertical-timeline-element-date'
        date={date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={icon}
      >
        <h3 className='vertical-timeline-element-title'>{title}</h3>
        <Box className={tagStyles.l_card__rightContent__tagBox}>
          {tags.map((tag) => (
            <Typography
              key={tag}
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              {tag}
            </Typography>
          ))}
        </Box>
        <p>{eventDesc}</p>
      </VerticalTimelineElement>
    </>
  );
};
