import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { login } from '../../../redux/auth/operations';
import { LoginSchema } from 'components/formik/schemas';
import FormikControl from 'components/formik/FormikControl';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const { error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormikControl
          className={styles.input}
          control="input"
          type="email"
          label={t('form.email')}
          name="email"
          placeholder={t('form.placeholderEmail')}
        />
        <FormikControl
          className={styles.input}
          control="input"
          type="password"
          label={t('form.password')}
          name="password"
          placeholder={t('form.placeholderPassword')}
        />
        {error && <p className={styles.error}>Incorrect password or email</p>}
        <button className={styles.button} type="submit">
          {t('form.log-in-btn')}
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
