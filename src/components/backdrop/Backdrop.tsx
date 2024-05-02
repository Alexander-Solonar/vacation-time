import { useRef, useState } from 'react';
import LoginForm from '../loginForm';
import RegisterForm from '../registerForm';
import { Link, useLocation } from 'react-router-dom';
import './Backdrop.scss';

const Backdrop = () => {
  const [changeForm, setChangeForm] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const textButton = changeForm ? 'Login' : 'Register';

  return (
    <div className="backdrop">
      <Link className="backLink" to={backLinkHref.current}></Link>
      <div className="backdrop__content">
        {changeForm && <RegisterForm />}
        {!changeForm && <LoginForm />}

        <button
          className="change-form-btn"
          onClick={() => setChangeForm(!changeForm)}
        >
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default Backdrop;
