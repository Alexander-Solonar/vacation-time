import { ErrorMessage, Field } from 'formik';

const FormikSelect = props => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field as="select" id={name} name={name} {...rest}>
        <option value="not selected">Not selected</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Field>
      <ErrorMessage name={name} component="p" className="error" />
    </div>
  );
};

export default FormikSelect;
