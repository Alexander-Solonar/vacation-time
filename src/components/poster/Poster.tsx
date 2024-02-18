import { useTranslation } from 'react-i18next';
import scss from './Poster.module.scss';

const Poster = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.mainPoster}>
      <h1 className={scss.title}>VacationTime</h1>
      <h2 className={scss.subTitle}>{t('poster.text')}</h2>
    </div>
  );
};

export default Poster;
