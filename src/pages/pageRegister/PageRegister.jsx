import { Link } from 'react-router-dom';
import RegisterForm from 'components/forms/registerForm';
import Backdrop from 'components/common/backdrop';
import styles from './PageRegister.module.scss';

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
