import { Link } from 'react-router-dom';
import RegisterForm from 'components/registerForm';
import styles from './PageRegister.module.scss';
import Backdrop from 'components/backdrop';

const PageRegister = () => {
  return (
    <Backdrop>
      <RegisterForm />
      <Link to="/login" className={styles.toggleButton}>
        Login
      </Link>
    </Backdrop>
  );
};

export default PageRegister;
