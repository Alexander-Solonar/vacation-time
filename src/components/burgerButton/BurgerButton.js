import { useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import icons from '../../assets/images/icons.svg';
import './BurgerButton.scss';

const BurgerButton = () => {
  const { isOpenMobMenu, setIsOpenMobMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMobMenu(prevState => !prevState);
  };

  return (
    <>
      {!isOpenMobMenu && (
        <button className="burger-btn">
          <svg width="58" height="58" onClick={handleClick}>
            <use href={`${icons}#burger-close`} />
          </svg>
        </button>
      )}

      {isOpenMobMenu && (
        <button
          className={clsx(['burger-btn'], isOpenMobMenu && ['burger-btn-open'])}
        >
          <svg width="58" height="58" onClick={handleClick}>
            <use href={`${icons}#burger-open`} />
          </svg>
        </button>
      )}
    </>
  );
};

export default BurgerButton;
