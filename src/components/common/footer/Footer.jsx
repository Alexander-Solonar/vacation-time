import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>© 2024 VacationTime. {t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
