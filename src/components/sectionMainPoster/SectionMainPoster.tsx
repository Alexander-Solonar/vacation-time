import { useTranslation } from 'react-i18next';
import scss from './SectionMainPoster.module.scss';

const SectionMainPoster = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['main-poster']}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>VacationTime</h1>
          <h2 className={scss.subTitle}>{t('main-poster.text')}</h2>
        </div>
      </div>
    </section>
  );
};

export default SectionMainPoster;
