import { useTranslation } from 'react-i18next';
import scss from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={scss.footer}>
      <div className={scss.footerContainer}>
        <p className={scss.text}>© 2024 VacationTime. {t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
