import { Formik, Form } from 'formik';
import { date, object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../../redux/operations';
import 'react-datepicker/dist/react-datepicker.css';
import FormikControl from '../../formik/FormikControl';
import { format, parse } from 'date-fns';
import icons from '../../../assets/images/icons.svg';
import styles from './EditProfileForm.module.scss';

const schema = object({
  name: string().trim().required('This is a required field'),
  gender: string().trim(),
  age: date().required('This is a required field'),
  phone: string(),
  email: string().trim().required('This is a required field'),
});

const vary = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const EditProfileForm = ({ items, onClose }) => {
  const { uid } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const initialValues = {
    ...items,
    age: items?.age ? parse(items.age, 'dd.MM.yyyy', new Date()) : '',
    gender: '',
    phone: '',
  };

  const handleSubmit = values => {
    const dateString = format(values.age, 'dd.MM.yyyy');
    dispatch(
      editProfile({
        uid,
        values: { ...values, age: dateString },
      })
    );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={() => onClose(false)}>
          <svg width="32" height="32">
            <use href={`${icons}#icon-close-menu`}></use>
          </svg>
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className={styles.form}>
              <FormikControl
                className={styles.input}
                control="input"
                type="text"
                label="Name"
                name="name"
              />
              <FormikControl
                className={styles.input}
                control="select"
                label="Gender"
                name="gender"
                options={vary}
              />

              <FormikControl
                className={styles.input}
                control="date"
                label="Age"
                name="age"
              />

              <FormikControl
                className={styles.input}
                control="phone"
                type="text"
                label="Phone"
                name="phone"
              />
              <FormikControl
                className={styles.input}
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProfileForm;
