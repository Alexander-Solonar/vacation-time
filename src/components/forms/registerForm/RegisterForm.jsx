import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { register } from '../../../redux/auth/operations';
import { registerSchema } from 'components/formik/schemas';
import FormikControl from 'components/formik/FormikControl';

import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = async (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormikControl
          className={styles.input}
          control="input"
          type="text"
          label={t('form.name')}
          name="name"
          placeholder={t('form.placeholderName')}
        />

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
        <button className={styles.button} type="submit">
          {t('form.register-btn')}
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
