import { useDispatch, useSelector } from 'react-redux';
import { format, parse } from 'date-fns';
import { Formik, Form } from 'formik';
import { EditSchema } from 'components/formik/schemas';
import { editProfile } from '../../../redux/operations';
import 'react-datepicker/dist/react-datepicker.css';
import FormikControl from '../../formik/FormikControl';
import icons from '../../../assets/images/icons.svg';
import styles from './EditProfileForm.module.scss';

const vary = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const EditProfileForm = ({ onClose }) => {
  const { uid } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.data);
  const dispatch = useDispatch();

  const initialValues = {
    ...user,
    age: user?.age ? parse(user.age, 'dd.MM.yyyy', new Date()) : '',
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
          validationSchema={EditSchema}
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
                label="DOB"
                name="dob"
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
