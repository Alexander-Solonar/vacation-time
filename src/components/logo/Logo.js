import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <img src={logo} alt="logo" width={148} />
    </Link>
  );
};

export default Logo;
