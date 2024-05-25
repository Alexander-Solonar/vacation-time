import { useTranslation } from 'react-i18next';
import MainTitle from '../../components/mainTitle';
import styles from './PageAboutUs.module.scss';

const PageAboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <MainTitle name={t('about-us.title')} />
      <div className="container">
        <div className={styles.poster}>
          <h2 className={styles.posterTitle}>{t('about-us.poster-title')}</h2>
          <h3 className={styles.posterSubTitle}>
            {t('about-us.poster-sub-title')}
          </h3>
        </div>

        <p className={styles.text}>
          {t('about-us.text.first-paragraph')}
          <br />
          <br />
          {t('about-us.text.second-paragraph')}
          <br />
          <br />
          {t('about-us.text.third-paragraph')}
        </p>
      </div>
    </div>
  );
};

export default PageAboutUs;
