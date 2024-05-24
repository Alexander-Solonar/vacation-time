import Navigation from '../navigation';
import LangSwitchButton from '../langSwitchButton';
import Logo from '../logo/Logo';
import BurgerButton from '../burgerButton';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.appBar}>
        <Logo />
        <Navigation />
        <BurgerButton />
        <LangSwitchButton />
      </div>
    </header>
  );
};

export default Header;
