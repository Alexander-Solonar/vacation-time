import { ErrorMessage, Field } from 'formik';
import DateView from 'react-datepicker';

const FormikDatePicker = props => {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label className="form-label" htmlFor={name}>
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
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};

export default FormikDatePicker;
