import Navigation from '../navigation';
import BurgerButton from 'components/buttons/burgerButton';
import LangSwitchButton from 'components/buttons/langSwitchButton';
import Logo from '../logo/Logo';
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
