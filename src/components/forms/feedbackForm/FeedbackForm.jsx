import { Form, Formik } from 'formik';
import { feedbackSchema } from 'components/formik/schemas';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';
import FormikControl from '../../formik/FormikControl';
import styles from './FeedbackForm.module.scss';

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
    <section>
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={feedbackSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <h3 className={styles.title}>{t('feedbackForm.title')}</h3>
            <div className={styles.blockInput}>
              <FormikControl
                className={styles.input}
                control="input"
                type="text"
                label={t('feedbackForm.name')}
                name="name"
                placeholder={t('feedbackForm.placeholderName')}
              />
              <FormikControl
                className={styles.input}
                control="phone"
                type="text"
                label={t('feedbackForm.phone')}
                name="phone"
              />
            </div>
            <button className={styles.button} type="submit">
              {t('feedbackForm.button')}
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default FeedbackForm;
