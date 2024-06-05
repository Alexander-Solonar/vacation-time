import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { LoginSchema } from 'components/formik/schemas';
import { login } from '../../../redux/auth/operations';
import FormikControl from 'components/formik/FormikControl';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

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
        <h1 className={styles.title}>User Log in</h1>
        <FormikControl
          className={styles.input}
          control="input"
          type="email"
          label="Email"
          name="email"
        />
        <FormikControl
          className={styles.input}
          control="input"
          type="password"
          label="Password"
          name="password"
        />
        {error && <p className={styles.error}>Incorrect password or email</p>}
        <button className={styles.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
