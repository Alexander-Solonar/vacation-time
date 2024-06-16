import { ErrorMessage, Field } from 'formik';
import DateView from 'react-datepicker';
import styles from './Formik.module.scss';

const FormikDatePicker = ({ label, name, ...props }) => {
  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name} autocomplete="off">
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              id={name}
              {...field}
              {...props}
              showIcon
              calendarIconClassname={styles.icon}
              toggleCalendarOnIconClick
              selected={value}
              placeholderText="dd.MM.yyyy"
              dateFormat="dd.MM.yyyy"
              onChange={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="p" className={styles.error} />
    </div>
  );
};

export default FormikDatePicker;
