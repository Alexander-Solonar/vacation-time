import { Link } from 'react-router-dom';
import clsx from 'clsx';
import bakota from '../../assets/images/bakota.webp';
import icons from '../../assets/images/icons.svg';
import scss from './HousesList.module.scss';
import { useState } from 'react';

const HousesList = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);

  const SvgClassName = clsx(scss['icon-star'], {
    [scss['clicked']]: isStarClicked,
  });

  const handleFavoriteIcon = () => {
    setIsStarClicked(!isStarClicked);
  };

  return (
    <ul className={scss['house-list']}>
      <li className={scss['house-item']}>
        <img src={bakota} width={485} alt="bakota" />
        <div className={scss['description-block']}>
          <h2 className={scss['house-title']}>Незвідана Бакота</h2>
          <p className={scss['house-text']}>
            У Хмельницькій області розташований загублений край - Бакота.
            Мальовничий каньйон з давньою історією захоплює своїми просторами та
            незвичною атмосферою. Бджільництво, свіжий мед із польових трав,
            дотик до природи.
          </p>
        </div>
        <Link className={scss['more-details-button']} to="#">
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

      <li className={scss['house-item']}>
        <img src={bakota} width={485} alt="bakota" />
        <div className={scss['description-block']}>
          <h2 className={scss['house-title']}>Незвідана Бакота</h2>
          <p className={scss['house-text']}>
            У Хмельницькій області розташований загублений край - Бакота.
            Мальовничий каньйон з давньою історією захоплює своїми просторами та
            незвичною атмосферою. Бджільництво, свіжий мед із польових трав,
            дотик до природи.
          </p>
        </div>
        <Link className={scss['more-details-button']} to="#">
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

      <li className={scss['house-item']}>
        <img src={bakota} width={485} alt="bakota" />
        <div className={scss['description-block']}>
          <h2 className={scss['house-title']}>Незвідана Бакота</h2>
          <p className={scss['house-text']}>
            У Хмельницькій області розташований загублений край - Бакота.
            Мальовничий каньйон з давньою історією захоплює своїми просторами та
            незвичною атмосферою. Бджільництво, свіжий мед із польових трав,
            дотик до природи.
          </p>
        </div>
        <Link className={scss['more-details-button']} to="#">
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

      <li className={scss['house-item']}>
        <img src={bakota} width={485} alt="bakota" />
        <div className={scss['description-block']}>
          <h2 className={scss['house-title']}>Незвідана Бакота</h2>
          <p className={scss['house-text']}>
            У Хмельницькій області розташований загублений край - Бакота.
            Мальовничий каньйон з давньою історією захоплює своїми просторами та
            незвичною атмосферою. Бджільництво, свіжий мед із польових трав,
            дотик до природи.
          </p>
        </div>
        <Link className={scss['more-details-button']} to="#">
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

      <li className={scss['house-item']}>
        <img src={bakota} width={485} alt="bakota" />
        <div className={scss['description-block']}>
          <h2 className={scss['house-title']}>Незвідана Бакота</h2>
          <p className={scss['house-text']}>
            У Хмельницькій області розташований загублений край - Бакота.
            Мальовничий каньйон з давньою історією захоплює своїми просторами та
            незвичною атмосферою. Бджільництво, свіжий мед із польових трав,
            дотик до природи.
          </p>
        </div>
        <Link className={scss['more-details-button']} to="#">
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

      <li className={scss['house-item']}>
        <img src={bakota} width={485} alt="bakota" />
        <div className={scss['description-block']}>
          <h2 className={scss['house-title']}>Незвідана Бакота</h2>
          <p className={scss['house-text']}>
            У Хмельницькій області розташований загублений край - Бакота.
            Мальовничий каньйон з давньою історією захоплює своїми просторами та
            незвичною атмосферою. Бджільництво, свіжий мед із польових трав,
            дотик до природи.
          </p>
        </div>
        <Link className={scss['more-details-button']} to="#">
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
    </ul>
  );
};

export default HousesList;
