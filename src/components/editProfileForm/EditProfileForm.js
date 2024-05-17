import { Formik, Form } from 'formik';
import { date, object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../redux/operations';
import 'react-datepicker/dist/react-datepicker.css';
import FormikControl from '../formik/FormikControl';
import './EditProfileForm.scss';
import { format, parse } from 'date-fns';

const schema = object({
  name: string().trim().required('This is a required field'),
  gender: string().trim().required('This is a required field'),
  age: date().required('This is a required field'),
  phone: string().trim().required('This is a required field'),
  email: string().trim().required('This is a required field'),
});

const EditProfileForm = ({ items, closeForm }) => {
  const { name, gender, age, phone, email } = items;
  const { uid } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const initialValues = {
    name,
    gender: gender === '' ? 'Not selected' : gender,
    age: age === '' ? '' : parse(age, 'dd.MM.yyyy', new Date()),
    phone,
    email,
  };

  const handleSubmit = values => {
    const dateString = format(values.age, 'dd.MM.yyyy');
    dispatch(editProfile({ uid, values: { ...values, age: dateString } }));
    closeForm(false);
  };

  return (
    <div className="edit-form-wrapper">
      <button className="close-button" onClick={() => closeForm(false)}>
        Close
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="edit-form">
            <FormikControl
              className="edit-form-input"
              control="input"
              type="text"
              label="Name"
              name="name"
            />
            <FormikControl
              className="edit-form-input"
              control="select"
              label="Gender"
              name="gender"
            />

            <FormikControl
              className="edit-form-input"
              control="date"
              label="Age"
              name="age"
            />

            <FormikControl
              className="edit-form-input"
              control="input"
              type="text"
              label="Phone"
              name="phone"
            />
            <FormikControl
              className="edit-form-input"
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfileForm;
