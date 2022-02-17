import commonStyles from '../styles/common.module.scss';
import { PageTitle } from '../components/PageTitle';
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styles from '../styles/Contact.module.scss';
import Button from '@mui/material/Button';

interface State {
  name: string;
  mail: string;
  title: string;
  message: string;
}

export default function Contact() {
  const [values, setValues] = React.useState<State>({
    name: '',
    mail: '',
    title: '',
    message: '',
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

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
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant='filled'
            color='secondary'
          >
            <InputLabel htmlFor='filled-adornment-title'>氏名</InputLabel>
            <FilledInput
              id='filled-adornment-title'
              value={values.name}
              onChange={handleChange('name')}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant='filled'
            color='secondary'
          >
            <InputLabel htmlFor='filled-adornment-mail'>
              メールアドレス
            </InputLabel>
            <FilledInput
              id='filled-adornment-mail'
              type='mail'
              value={values.mail}
              onChange={handleChange('mail')}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant='filled'
            color='secondary'
          >
            <InputLabel htmlFor='filled-adornment-title'>件名</InputLabel>
            <Input
              id='filled-adornment-title'
              value={values.title}
              onChange={handleChange('title')}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant='filled'
            color='secondary'
          >
            <InputLabel htmlFor='filled-adornment-message'>
              メッセージ
            </InputLabel>
            <FilledInput
              id='filled-adornment-message'
              value={values.message}
              multiline
              rows={4}
              onChange={handleChange('message')}
            />
          </FormControl>
        </div>
      </Box>
    </div>
  );
}
