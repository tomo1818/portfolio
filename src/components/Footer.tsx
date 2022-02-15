import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.l_footer} role='contentinfo'>
      <div className={styles.l_footer__content}>
        <div className={styles.l_footer__content__copyright}>© 2021 tomo </div>
      </div>
    </footer>
  );
};

export default Footer;
