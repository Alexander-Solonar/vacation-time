import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import scss from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={scss.logo} to="/">
      <img src={logo} alt="logo" width={148} />
    </Link>
  );
};

export default Logo;
