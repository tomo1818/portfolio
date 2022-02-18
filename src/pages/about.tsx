import commonStyles from '../styles/Common.module.scss';
import styles from '../styles/About.module.scss';
import { PageTitle } from '../components/PageTitle';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GitHubIcon from '@mui/icons-material/GitHub';
import { SiPython, SiShopify } from 'react-icons/si';
import { ImAndroid } from 'react-icons/im';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import tagStyles from '../styles/Product.module.scss';

import type { Intern } from '../types/intern';

type MyInfo = {
  title: string,
  content: string,
}

const myInfo: MyInfo[] = [
  {
    title: '氏名',
    content: 'tomo',
  },
  {
    title: '所属',
    content: '東京工業大学 修士1年',
  },
];

const internList: Intern[] = [
  {
    id: 0,
    date: '2021年4月 〜 現在',
    title: '株式会社 飛躍',
    eventDesc: 'Shopifyを用いたECサイト制作業務を行なっています。',
    isShowIcon: true,
    icon: <SiShopify />,
    iconColor: '#fff',
  },
];

export default function About() {
  return (
    <div
      className={`${commonStyles.mainContainer} ${commonStyles.mainBg} ${styles.aboutContainer}`}
    >
      <PageTitle title='About' />
      <TableContainer component={Paper} className={styles.l_table}>
        <Table sx={{ minWidth: 320 }} aria-label='my info table'>
          <TableBody>
            {myInfo.map((info) => (
              <TableRow key={info.title} className={styles.l_table__row}>
                <TableCell component='th' scope='row' align='left'>
                  {info.title}
                </TableCell>
                <TableCell align='center'>{info.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Accordion className={styles.l_accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>プログラミングを始めたきっかけは?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.l_accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>プログラミングを始めたきっかけは?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <VerticalTimeline
        className={`${tagStyles.productContainer} ${styles.l_timeLine}`}
      >
        <VerticalTimelineElement
          className='vertical-timeline-element--work vertical-timeline-element-date'
          date='2021年4月 〜 現在'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SiShopify />}
        >
          <h3 className='vertical-timeline-element-title'>株式会社 飛躍</h3>
          <Box className={tagStyles.l_card__rightContent__tagBox}>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              JavaScript
            </Typography>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              Liquid
            </Typography>
          </Box>
          <p>Shopifyを用いたECサイト制作業務を行なっています。</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021年12月'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<ImAndroid />}
        >
          <h3 className='vertical-timeline-element-title'>
            株式会社 日本総合研究所
          </h3>
          <Box className={tagStyles.l_card__rightContent__tagBox}>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              Android
            </Typography>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              Java
            </Typography>
          </Box>
          <p>3日間チームでAndroidアプリのスクラム開発に取り組みました</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022年2月'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SiPython />}
        >
          <h3 className='vertical-timeline-element-title'>
            株式会社 パナソニック
          </h3>
          <Box className={tagStyles.l_card__rightContent__tagBox}>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              Android
            </Typography>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              Java
            </Typography>
            <Typography
              className={`${tagStyles.l_card__rightContent__tagName} ${tagStyles.l_card__rightContent__aboutTag}`}
              sx={{ margin: 0 }}
              variant='body2'
            >
              Python
            </Typography>
          </Box>
          <p>
            2 週間 Android
            アプリ開発や組み込み及びツールを用いた自動テスト、デバッグに取り組みました。
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GitHubIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<GitHubIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}
