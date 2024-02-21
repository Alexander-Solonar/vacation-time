import { useTranslation } from 'react-i18next';
import image from '../../assets/images/second-poster.jpg';
import scss from './SectionSecondPoster.module.scss';

const SectionSecondPoster = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.sectionSecondPoster}>
      <img src={image} alt="man and women" width={580} />
      <p className={scss.text}>{t('second-poster.text')}</p>
    </div>
  );
};

export default SectionSecondPoster;
