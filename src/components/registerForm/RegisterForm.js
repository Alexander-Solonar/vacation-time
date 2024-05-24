import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import FormikControl from '../formik/FormikControl';
import styles from './RegisterForm.module.scss';

const schema = object({
  name: string().trim().required('Name is a required field'),
  email: string().trim().required('Email is a required field'),
  password: string().trim().required('Password is a required field'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

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
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <h1 className={styles.title}>User registration</h1>
        <FormikControl
          className={styles.input}
          control="input"
          type="text"
          label="Name"
          name="name"
          placeholder="Enter your name"
        />

        <FormikControl
          className={styles.input}
          control="input"
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
        />
        <FormikControl
          className={styles.input}
          control="input"
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
