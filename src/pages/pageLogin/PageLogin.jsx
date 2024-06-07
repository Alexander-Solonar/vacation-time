import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginForm from 'components/forms/loginForm';
import Backdrop from 'components/common/backdrop';

import styles from './PageLogin.module.scss';

const PageLogin = () => {
  const { t } = useTranslation();

  return (
    <Backdrop>
      <LoginForm />
      <Link to="/register" className={styles.toggleButton}>
        {t('form.register-btn')}
      </Link>
    </Backdrop>
  );
};

export default PageLogin;
