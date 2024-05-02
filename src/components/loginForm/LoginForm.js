import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { object, string } from 'yup';
import './LoginForm.scss';
import { loginDB } from '../../firebase/server';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../../redux/auth/authSlice';
import { logEvent } from 'firebase/analytics';
import { login } from '../../redux/auth/operations';

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
      <Form className="login-form">
        <h1 className="login-form__title">User Log in</h1>
        <label className="login-form__label">
          Email
          <Field
            className="login-form__input"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="p" className="error" />
        </label>
        <label className="login-form__label">
          Password
          <Field
            className="login-form__input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="p" className="error" />
        </label>
        <button className="login-form__button" type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
