import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/pageTitle';
import scss from './PageAboutUs.module.scss';

const PageAboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className={scss['page-about-us']}>
      <PageTitle name={t('about-us.title')} />
      <div className="container">
        <div className={scss.poster}>
          <h2 className={scss['poster-title']}>{t('about-us.poster-title')}</h2>
          <h3 className={scss['poster-sub-title']}>
            {t('about-us.poster-sub-title')}
          </h3>
        </div>

        <p className={scss.text}>
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
