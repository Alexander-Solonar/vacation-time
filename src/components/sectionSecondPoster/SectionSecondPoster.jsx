import { useTranslation } from 'react-i18next';
import image from '../../assets/images/second-poster.jpg';
import styles from './SectionSecondPoster.module.scss';

const SectionSecondPoster = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <img src={image} alt="man and women" width={580} />
          <p className={styles.text}>{t('second-poster.text')}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionSecondPoster;
