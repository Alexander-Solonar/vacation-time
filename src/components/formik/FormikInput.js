import { ErrorMessage, Field } from 'formik';
import './Formik.scss';

const FormikInput = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};

export default FormikInput;
