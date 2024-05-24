import { useTranslation } from 'react-i18next';
import styles from './SectionMainPoster.module.scss';

const SectionMainPoster = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>VacationTime</h1>
          <h2 className={styles.subTitle}>{t('main-poster.text')}</h2>
        </div>
      </div>
    </section>
  );
};

export default SectionMainPoster;
