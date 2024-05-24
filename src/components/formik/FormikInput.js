import { ErrorMessage, Field } from 'formik';
import styles from './Formik.module.scss';

const FormikInput = props => {
  const { label, name, ...rest } = props;
  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component="p" className={styles.error} />
    </div>
  );
};

export default FormikInput;
