import { useRef, useState } from 'react';
import LoginForm from '../loginForm';
import RegisterForm from '../registerForm';
import { Link, useLocation } from 'react-router-dom';
import styles from './Backdrop.module.scss';

const Backdrop = () => {
  const [isRegister, setIsRegister] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const toggleForm = () => setIsRegister(prev => !prev);
  const buttonText = isRegister ? 'Login' : 'Register';

  return (
    <div className={styles.backdrop}>
      <Link className={styles.backLink} to={backLinkHref.current} />
      <div className={styles.content}>
        {isRegister ? <RegisterForm /> : <LoginForm />}
        <button className={styles.toggleButton} onClick={toggleForm}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Backdrop;
