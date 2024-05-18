import Navigation from '../navigation';
import LangSwitchButton from '../langSwitchButton';
import Logo from '../logo/Logo';
import scss from './Header.module.scss';
import BurgerButton from '../burgerButton';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.appBar}>
        <Logo />
        <Navigation />
        <BurgerButton />
        <LangSwitchButton />
      </div>
    </header>
  );
};

export default Header;
