import { useTranslation } from 'react-i18next';
import image from '../../assets/images/second-poster.jpg';
import scss from './SectionSecondPoster.module.scss';

const SectionSecondPoster = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['second-poster']}>
      <div className="container">
        <div className={scss.content}>
          <img src={image} alt="man and women" width={580} />
          <p className={scss.text}>{t('second-poster.text')}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionSecondPoster;
