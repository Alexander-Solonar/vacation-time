import { Link } from 'react-router-dom';
import styles from './PageLogin.module.scss';
import LoginForm from 'components/loginForm';
import Backdrop from 'components/backdrop';

const PageLogin = () => {
  return (
    <Backdrop>
      <LoginForm />
      <Link to="/register" className={styles.toggleButton}>
        Register
      </Link>
    </Backdrop>
  );
};

export default PageLogin;
