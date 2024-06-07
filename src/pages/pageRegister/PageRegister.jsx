import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RegisterForm from 'components/forms/registerForm';
import Backdrop from 'components/common/backdrop';

import styles from './PageRegister.module.scss';

const PageRegister = () => {
  const { t } = useTranslation();

  return (
    <Backdrop>
      <RegisterForm />
      <Link to="/login" className={styles.toggleButton}>
        {t('form.log-in-btn')}
      </Link>
    </Backdrop>
  );
};

export default PageRegister;
