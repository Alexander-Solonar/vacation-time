import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import './RegisterForm.scss';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

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
    try {
      dispatch(register(values));
    } catch (error) {
      console.error(error);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className="registration-form">
        <h1 className="registration-form__title">User registration</h1>
        <label className="registration-form__label">
          Name
          <Field
            className="registration-form__input"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="p" className="error" />
        </label>
        <label className="registration-form__label">
          Email
          <Field
            className="registration-form__input"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="p" className="error" />
        </label>
        <label className="registration-form__label">
          Password
          <Field
            className="registration-form__input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="p" className="error" />
        </label>
        <button className="registration-form__button" type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;

// await updateUserProfile({ displayName: values.name });
// writeDataToFirestore(user.uid, values.name, values.email);
