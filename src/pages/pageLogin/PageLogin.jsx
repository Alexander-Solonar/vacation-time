import { Link } from 'react-router-dom';
import LoginForm from 'components/forms/loginForm';
import Backdrop from 'components/common/backdrop';
import styles from './PageLogin.module.scss';

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
