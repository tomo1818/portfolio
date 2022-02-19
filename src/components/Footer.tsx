import styles from '../styles/Footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className={styles.l_footer} role='contentinfo'>
      <div className={styles.l_footer__contents}>
        <p className={styles.l_footer__contents__content}>© 2021 tomo</p>
        <p className={styles.l_footer__contents__content}>
          <a
            href='https://github.com/tomo1818'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
