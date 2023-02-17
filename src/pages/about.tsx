import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { PageTitle } from '../components/PageTitle';
import { AccordionLayout } from '../components/about/AccordionLayout';
import { TimeLine } from '../components/about/TimeLine';

import commonStyles from '../styles/Common.module.scss';
import styles from '../styles/About.module.scss';
import tagStyles from '../styles/Product.module.scss';
import { myInfo, accordionInfo, internList } from '../Constants/about';

export default function About() {
  return (
    <div
      className={`${commonStyles.mainContainer} ${commonStyles.mainBg} ${styles.aboutContainer}`}
    >
      <PageTitle title='About' />
      {/* <TableContainer component={Paper} className={styles.l_table}>
        <Table sx={{ minWidth: 320 }} aria-label='my info table'>
          <TableBody>
            {myInfo.map((info) => (
              <TableRow key={info.title} className={styles.l_table__row}>
                <TableCell
                  component='th'
                  scope='row'
                  align='left'
                  className={styles.l_table__row__th}
                >
                  {info.title}
                </TableCell>
                <TableCell align='center' className={styles.l_table__row__td}>
                  {info.content}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {accordionInfo.map((info) => (
        <AccordionLayout
          key={info.answer}
          question={info.question}
          answer={info.answer}
        />
      ))} */}
      <VerticalTimeline
        className={`${tagStyles.productContainer} ${styles.l_timeLine}`}
      >
        {internList.map((intern) => (
          <TimeLine
            key={intern.id}
            id={intern.id}
            date={intern.date}
            title={intern.title}
            eventDesc={intern.eventDesc}
            tags={intern.tags}
            icon={intern.icon}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}
