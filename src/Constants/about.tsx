import { AccordionInfo } from "../types/accordionInfo";
import { Intern } from "../types/intern";
import { SiPython, SiShopify } from 'react-icons/si';
import { ImAndroid } from 'react-icons/im';
import { SiNextdotjs } from 'react-icons/si';

type MyInfo = {
  title: string;
  content: string;
};

export const myInfo: MyInfo[] = [
  {
    title: '氏名',
    content: 'tomo',
  },
  {
    title: '所属',
    content: '東京工業大学 修士2年',
  },
];

export const accordionInfo: AccordionInfo[] = [
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

export const internList: Intern[] = [
  {
    id: 0,
    date: '2021年4月 〜 2022年3月',
    title: '株式会社 飛躍',
    eventDesc:
      'Shopifyを用いたECサイト制作業務を行なっていました。Shopify特有のLiquidを用いた開発を行いました。',
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
    date: '2022年4月〜7月',
    title: '株式会社 JX通信社',
    eventDesc: 'フロントエンドの開発を担当しました。',
    tags: ['FrontEnd', 'Next.js', 'React', 'TypeScript'],
    icon: <SiNextdotjs />,
  },
  {
    id: 4,
    date: '2022年7月〜2023年1月',
    title: 'ちょっと株式会社',
    eventDesc: 'フロントエンドの開発を担当しました。',
    tags: ['FrontEnd', 'Next.js', 'React', 'TypeScript', 'MicroCMS'],
    icon: <SiNextdotjs />,
  }
];