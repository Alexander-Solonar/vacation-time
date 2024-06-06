import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { editProfile } from '../../../redux/operations';
import { format, parse } from 'date-fns';
import { Formik, Form } from 'formik';
import { EditSchema } from 'components/formik/schemas';
import FormikControl from '../../formik/FormikControl';
import icons from '../../../assets/images/icons.svg';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './ProfileEditForm.module.scss';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const initialValues = user => ({
  ...user,
  dob: user?.dob ? parse(user.dob, 'dd.MM.yyyy', new Date()) : '',
  gender: '',
  phone: '',
});

const ProfileEditForm = ({ onClose }) => {
  const { uid } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.data);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const dateString = values.dob ? format(values.dob, 'dd.MM.yyyy') : '';
    dispatch(editProfile({ uid, values: { ...values, dob: dateString } }));
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
          initialValues={initialValues(user)}
          validationSchema={EditSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className={styles.form}>
              <FormikControl
                className={styles.input}
                control="input"
                type="text"
                label={t('account.name')}
                name="name"
              />
              <FormikControl
                className={styles.input}
                control="select"
                label={t('account.gender')}
                name="gender"
                options={genderOptions}
              />

              <FormikControl
                className={styles.input}
                control="date"
                label={t('account.date-birth')}
                name="dob"
              />

              <FormikControl
                className={styles.input}
                control="phone"
                type="text"
                label={t('account.phone')}
                name="phone"
              />
              <FormikControl
                className={styles.input}
                control="input"
                type="email"
                label={t('account.email')}
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

export default ProfileEditForm;
