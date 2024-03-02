import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import scss from './FeedbackForm.module.scss';
import { FC } from 'react';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';

Notiflix.Report.init({
  width: '360px',
  svgSize: '60px',
  messageFontSize: '16px',
  success: {
    svgColor: 'var(--primary-green-color)',
    buttonBackground: 'var(--secondary-color)',
    backOverlayColor: 'var(--fourth-color)',
  },
});

export interface FormFeedbackValues {
  name: string;
  phone: string;
}

interface FormErrorProps {
  name: string;
}

const schema = object({
  name: string().trim().required('Name is a required field'),
  phone: string()
    .trim()
    .matches(/^\+?3?8?(0\d{9})$/, 'Invalid phone number')
    .required('Phone is a required field'),
});

const FormError: FC<FormErrorProps> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={scss.error}>{message}</p>}
    />
  );
};

const FeedbackForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = async (
    values: FormFeedbackValues,
    actions: FormikHelpers<FormFeedbackValues>
  ) => {
    Notiflix.Report.success(
      `${t('notiflix.title')}, ${values.name}!`,
      `${t('notiflix.message')} ${values.phone}`,
      'OK'
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={scss.form}>
        <h3 className={scss.formTitle}>{t('feedbackForm.title')}</h3>
        <div className={scss.blockInpit}>
          <label className={scss.label}>
            {t('feedbackForm.name')}
            <Field
              className={scss.input}
              type="text"
              name="name"
              placeholder={t('feedbackForm.placeholderName')}
            />
            <FormError name="name" />
          </label>
          <label className={scss.label}>
            {t('feedbackForm.phone')}
            <Field
              className={scss.input}
              type="phone"
              name="phone"
              placeholder={t('feedbackForm.placeholderPhone')}
            />
            <FormError name="phone" />
          </label>
        </div>
        <button className={scss.button} type="submit">
          {t('feedbackForm.button')}
        </button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
