import Navigation from '../navigation';
import LangSwitchButton from '../langSwitchButton';
import Logo from '../logo/Logo';
import scss from './Header.module.scss';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.appBar}>
        <Logo />
        <Navigation />
        <LangSwitchButton />
      </div>
    </header>
  );
};

export default Header;
