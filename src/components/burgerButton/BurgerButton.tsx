import { useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import icons from '../../assets/images/icons.svg';
import scss from './BurgerButton.module.scss';

const BurgerButton = () => {
  const { isOpenBurgerMenu, setIsOpenBurgerMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenBurgerMenu(prevState => !prevState);
  };

  return (
    <>
      {!isOpenBurgerMenu && (
        <button className={scss['burger']}>
          <svg width="58" height="58" onClick={handleClick}>
            <use href={`${icons}#burger-close`} />
          </svg>
        </button>
      )}

      {isOpenBurgerMenu && (
        <button
          className={clsx(
            scss['burger'],
            isOpenBurgerMenu && scss['open-menu']
          )}
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
