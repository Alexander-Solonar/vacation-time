import { ErrorMessage, Field } from 'formik';
import DateView from 'react-datepicker';
import styles from './Formik.module.scss';

const FormikDatePicker = props => {
  const { label, name, ...rest } = props;

  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              autocomplete="off"
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
