import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import FormikControl from '../formik/FormikControl';
import styles from './LoginForm.module.scss';

const schema = object({
  email: string().trim().required('Email is a required field'),
  password: string().trim().required('Password is a required field'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

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
      validationSchema={schema}
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

        <button className={styles.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
