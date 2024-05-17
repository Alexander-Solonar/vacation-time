import FormikDatePicker from './FormikDatePicker';
import FormikInput from './FormikInput';
import FormikSelect from './FormikSelect';

const FormikControl = props => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <FormikInput {...rest} />;
    case 'select':
      return <FormikSelect {...rest} />;
    case 'date':
      return <FormikDatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
