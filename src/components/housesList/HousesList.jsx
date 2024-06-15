import { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/images/icons.svg';
import styles from './HousesList.module.scss';
import { useTranslation } from 'react-i18next';

const HousesList = ({ filteredHouses }) => {
  const [iconColors, setIconColors] = useState({});
  const { t } = useTranslation();

  const handleFavoriteIcon = id => {
    setIconColors(prevColors => ({
      ...prevColors,
      [id]: prevColors[id] === '#f4dc00' ? 'black' : '#f4dc00',
    }));
  };

  return (
    <ul>
      {filteredHouses.map(el => (
        <li key={el.id} className={styles.item}>
          <img src={el.picture} width={485} alt="cottage" />
          <div className={styles.description}>
            <h2 className={styles.title}>{el.title}</h2>
            <p className={styles.text}>{el.text}</p>
          </div>
          <Link className={styles.detailsButton} to={`/reserve/house-${el.id}`}>
            {t('reserve.button-more')}
          </Link>

          <svg
            className={styles.iconStar}
            width="42"
            height="42"
            onClick={() => handleFavoriteIcon(el.id)}
            fill={iconColors[el.id] || 'black'}
          >
            <use href={`${icons}#icon-star`} />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default HousesList;
