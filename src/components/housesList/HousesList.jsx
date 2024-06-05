import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import bakota from '../../assets/images/bakota.webp';
import icons from '../../assets/images/icons.svg';
import styles from './HousesList.module.scss';

const houses = [1, 2, 3, 4, 5];

const HousesList = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);

  const SvgClassName = clsx(styles.iconStar, {
    [styles.clicked]: isStarClicked,
  });

  const handleFavoriteIcon = () => {
    setIsStarClicked(!isStarClicked);
  };

  return (
    <ul>
      {houses.map(e => (
        <li key={e} className={styles.item}>
          <img src={bakota} width={485} alt="bakota" />
          <div className={styles.description}>
            <h2 className={styles.title}>Незвідана Бакота</h2>
            <p className={styles.text}>
              У Хмельницькій області розташований загублений край - Бакота.
              Мальовничий каньйон з давньою історією захоплює своїми просторами
              та незвичною атмосферою. Бджільництво, свіжий мед із польових
              трав, дотик до природи.
            </p>
          </div>
          <Link className={styles.detailsButton} to={`/reserve/house-${e}`}>
            Детальніше
          </Link>
          <svg
            className={SvgClassName}
            width="42"
            height="42"
            onClick={handleFavoriteIcon}
          >
            <use href={`${icons}#icon-star`} />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default HousesList;
