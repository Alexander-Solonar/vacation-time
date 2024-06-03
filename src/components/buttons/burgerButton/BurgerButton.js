import { useContext } from 'react';
import { Context } from 'context/Context';
import clsx from 'clsx';
import icons from '../../../assets/images/icons.svg';
import styles from './BurgerButton.module.scss';

const BurgerButton = () => {
  const { isOpenMobMenu, setIsOpenMobMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMobMenu(prevState => !prevState);
  };

  return (
    <button
      className={clsx(styles.button, isOpenMobMenu && styles.isOpen)}
      onClick={handleClick}
    >
      <svg width="58" height="58">
        <use
          href={`${icons}#${isOpenMobMenu ? 'burger-open' : 'burger-close'}`}
        />
      </svg>
    </button>
  );
};

export default BurgerButton;
