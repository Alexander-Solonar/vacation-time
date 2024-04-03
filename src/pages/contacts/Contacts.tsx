import { useTranslation } from 'react-i18next';
import ContactList from '../../components/contactList';
import PageTitle from '../../components/pageTitle';
import scss from './Contacts.module.scss';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['page-contact']}>
      <PageTitle name={t('contacts.title')} />
      <div className="container">
        <ContactList />
      </div>
    </section>
  );
};

export default Contacts;
