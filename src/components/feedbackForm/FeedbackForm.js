import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';
import './FeedbackForm.scss';
import FormikControl from '../formik/FormikControl';

Notiflix.Report.init({
  width: '360px',
  svgSize: '60px',
  messageFontSize: '16px',
  success: {
    svgColor: '#008000',
    buttonBackground: '#2e3963',
    backOverlayColor: '#552db133',
  },
});

const schema = object({
  name: string().trim().required('Name is a required field'),
  phone: string()
    .trim()
    .matches(/^\+?3?8?(0\d{9})$/, 'Invalid phone number')
    .required('Phone is a required field'),
});

const FeedbackForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = async (values, actions) => {
    Notiflix.Report.success(
      `${t('notiflix.title')}, ${values.name}!`,
      `${t('notiflix.message')} ${values.phone}`,
      'OK'
    );

    actions.resetForm();
  };

  return (
    <section className="feedback-form">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <h3 className="formTitle">{t('feedbackForm.title')}</h3>
            <div className="blockInpit">
              <FormikControl
                className="input"
                control="input"
                type="text"
                label={t('feedbackForm.name')}
                name="name"
                placeholder={t('feedbackForm.placeholderName')}
              />

              <FormikControl
                className="input"
                control="input"
                type="text"
                label={t('feedbackForm.phone')}
                name="phone"
                placeholder={t('feedbackForm.placeholderPhone')}
              />
            </div>
            <button className="button" type="submit">
              {t('feedbackForm.button')}
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default FeedbackForm;
