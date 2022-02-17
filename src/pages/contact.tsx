import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PageTitle } from '../components/PageTitle';
import { TextField } from '@material-ui/core';
import commonStyles from '../styles/Common.module.scss';
import styles from '../styles/Contact.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { init, send } from 'emailjs-com';
import Router from 'next/router';

interface FormInput {
  name: string;
  email: string;
  title: string;
  message: string;
}

// バリデーションルール
const schema = yup.object({
  name: yup.string().required('氏名は必須項目です。'),
  email: yup
    .string()
    .required('メールアドレスは必須項目です。')
    .email('正しいメールアドレス入力してください'),
  title: yup
    .string()
    .required('タイトルは必須項目です。'),
  message: yup
    .string()
    .required('メッセージは必須項目です。')
    .min(10, '10文字以上入力してください')
});

// サンクスページ遷移
const handler = (path: string) => {
  Router.push(path);
};

export default function Contact() {
  const userID = process.env.NEXT_PUBLIC_USER_ID;
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);

      const template_param = {
        to_name: data.name,
        from_email: data.email,
        title: data.title,
        message: data.message,
      };

      send(serviceID, templateID, template_param).then(() => {
        handler('/thanks');
      });
    };
  }

  return (
    <div
      className={`${commonStyles.mainContainer} ${commonStyles.mainBg} ${styles.contactContainer}`}
    >
      <PageTitle title='Contact' />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '960px',
          margin: '0 auto',
        }}
        className={styles.l_contact}
      >
        <div>
          <TextField
            className={styles.l_contact__input}
            required
            fullWidth
            id='outlined-name'
            label='氏名'
            variant='outlined'
            {...register('name')}
            error={'name' in errors}
            helperText={errors.name?.message}
          />
          <TextField
            className={styles.l_contact__input}
            required
            fullWidth
            id='outlined-email'
            label='メールアドレス'
            variant='outlined'
            {...register('email')}
            error={'email' in errors}
            helperText={errors.email?.message}
          />
          <TextField
            className={styles.l_contact__input}
            required
            fullWidth
            id='outlined-title'
            label='件名'
            variant='outlined'
            {...register('title')}
            error={'title' in errors}
            helperText={errors.title?.message}
          />
          <TextField
            className={styles.l_contact__input}
            required
            fullWidth
            id='outlined-message'
            label='メッセージ'
            variant='outlined'
            multiline
            rows={8}
            {...register('message')}
            error={'message' in errors}
            helperText={errors.message?.message}
          />
          <div className={styles.l_contact__button}>
            <Button
              fullWidth
              color='secondary'
              variant='contained'
              size='large'
              onClick={handleSubmit(onSubmit)}
            >
              送信
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
