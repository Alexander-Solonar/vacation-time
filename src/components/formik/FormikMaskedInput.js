import { ErrorMessage, Field } from 'formik';
import { InputMask } from 'primereact/inputmask';
import styles from './Formik.module.scss';

const FormikMaskedInput = props => {
  const { label, name, ...rest } = props;

  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ field }) => {
          return (
            <InputMask
              {...field}
              {...rest}
              id={name}
              mask="+38(099) 999-9999"
              placeholder="+38(099) 999-9999"
            ></InputMask>
          );
        }}
      </Field>
      <ErrorMessage name={name} component="p" className={styles.error} />
    </div>
  );
};

export default FormikMaskedInput;
