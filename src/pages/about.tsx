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
import { SiPython, SiShopify } from 'react-icons/si';
import { ImAndroid } from 'react-icons/im';
import { SiNextdotjs } from 'react-icons/si';

import commonStyles from '../styles/Common.module.scss';
import styles from '../styles/About.module.scss';
import tagStyles from '../styles/Product.module.scss';

import type { Intern } from '../types/intern';
import type { AccordionInfo } from '../types/accordionInfo';

type MyInfo = {
  title: string;
  content: string;
};

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

const accordionInfo: AccordionInfo[] = [
  {
    question: 'プログラミングを始めたのはいつから?',
    answer:
      'Web制作の学習は2021年初め頃から始めていましたが、本格的に学習を始めたのは2021年の9月頃からです。再帰やリスト、スタック、キュー、木構造などの基礎的なアルゴリズムやデータ構造を学びました。個人で開発、学習を行いつつ企業のインターンシップ等に参加しています。',
  },
  {
    question: '今後したいことは?',
    answer:
      '就職活動が落ち着いたらエンジニアとして長期インターンシップに挑戦したいと考えています。実務での開発経験を積みながらスキルアップしたいなと思っています。今はフロント領域を触ることが多いですがインフラやバックエンド周りも触ってみたいです。',
  },
  {
    question: '大学時代に力を入れていたことは?',
    answer:
      '学部時代のアメリカンフットボール部での活動です。最終学年にはリーグ優勝や個人賞の受賞を経験することが出来ました。学生の時にしか出来ない経験だったと感じています。',
  },
];

const internList: Intern[] = [
  {
    id: 0,
    date: '2021年4月 〜 2022年3月',
    title: '株式会社 飛躍',
    eventDesc:
      'Shopifyを用いたECサイト制作業務を行なっています。LiquidはShopify特有のプログラミング言語です。',
    tags: ['JavaScript', 'Liquid'],
    icon: <SiShopify />,
  },
  {
    id: 1,
    date: '2021年12月',
    title: '株式会社 日本総合研究所',
    eventDesc: '3日間チームで Android アプリのスクラム開発に取り組みました。',
    tags: ['Android', 'Java'],
    icon: <ImAndroid />,
  },
  {
    id: 2,
    date: '2022年1月',
    title: '株式会社 パナソニック',
    eventDesc:
      '2週間Androidアプリの開発や実機への組み込み及びツールを用いた自動テスト、デバッグに取り組みました。',
    tags: ['Android', 'Java', 'Python'],
    icon: <SiPython />,
  },
  {
    id: 3,
    date: '2022年4月〜',
    title: '株式会社 JX通信社',
    eventDesc: 'フロントエンドの開発を担当',
    tags: ['FrontEnd', 'Next.js', 'React', 'TypeScript'],
    icon: <SiNextdotjs />,
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
      ))}
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
