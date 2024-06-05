import { ErrorMessage, Field } from 'formik';
import Select from 'react-select';
import styles from './Formik.module.scss';

const customStyles = {
  control: provided => ({
    ...provided,
    flex: '1',
    height: '100%',
    marginLeft: '-11px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#fff',
    boxShadow: 'none',
  }),
  option: provided => ({
    ...provided,
    cursor: 'pointer',
    color: 'inherit',
    borderBottom: '1px solid #ddd',
    backgroundColor: 'inherit',

    '&:last-child': {
      borderBottom: 'none',
    },

    '&:hover': {
      backgroundColor: '#444765',
      color: '#fff',
    },
  }),
  menu: provided => ({
    ...provided,
    left: '0',
  }),
};

const FormikSelect = props => {
  const { label, name, options, ...rest } = props;

  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ field, form }) => (
          <Select
            inputId={name}
            {...rest}
            {...field}
            options={options}
            styles={customStyles}
            name={name}
            value={options.find(option => option.value === field.value)}
            onChange={option => form.setFieldValue(name, option.value)}
            onBlur={field.onBlur}
          />
        )}
      </Field>

      <ErrorMessage name={name} component="p" className={styles.error} />
    </div>
  );
};

export default FormikSelect;
