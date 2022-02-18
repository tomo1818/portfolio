import { PageTitle } from '../components/PageTitle';
import commonStyles from '../styles/Common.module.scss';
import styles from '../styles/Skill.module.scss';
import Card from '../components/skill/Card';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { SkillInfo } from '../types/skill';

const skills: SkillInfo[] = [
  {
    rate: 3,
    title: 'JavaScript',
    description:
      '1番初めに学習した言語です。JavaScriptとJavaでスタックやキュー、木構造などの基礎的なアルゴリズムの学習しました。',
  },
  {
    rate: 2,
    title: 'Java',
    description:
      '基礎的なアルゴリズムに加え、OOPやMVCモデルをJavaで学びました。JSから学習を始めたので初めは型付けに慣れるまでは時間がかかりました。',
  },
  {
    rate: 2,
    title: 'TypeScript',
    description:
      'ReactやVueなどのフレームワークをを学習する際に学びました。JSに慣れていたので割ととっつきやすかったです。',
  },
  {
    rate: 1,
    title: 'Android',
    description: '参加したインターンで何度か使用しました。',
  },
  {
    rate: 1,
    title: 'Python',
    description:
      '大学の授業や企業のインターンに参加した際に使用しました。画像認識、OCR機能を初めて使用した時は便利すぎて驚きました。',
  },
  {
    rate: 1,
    title: 'MySQL',
    description:
      'DBを学ぶ際に取り組みました。Javaと接続するのに苦労した記憶があります。',
  },
  {
    rate: 2,
    title: 'React',
    description:
      'このポートフォリオはNext.js＋TypeScript＋microCMS+materialUIで作成しています。',
  },
  {
    rate: 2,
    title: 'Vue',
    description:
      '初めてJSのフレームワークです。初めてやるならReactより取り組みやすかったと思います。',
  },
  {
    rate: 2,
    title: 'jQuery',
    description:
      '個人でWeb制作を請け負っていたため、かなりお世話になりました。個人的には使いやすいなと思っています。',
  },
];

export default function Skill() {
  return (
    <div className={`${commonStyles.mainContainer} ${commonStyles.mainBg}`}>
      <PageTitle title='Skill' />
      <Grid container spacing={2} className={styles.l_skill}>
        {skills.map((skill) => (
          <Grid item key={skill.title} xs={12} sm={6} lg={4}>
            <Card
              title={skill.title}
              description={skill.description}
              rate={skill.rate}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
