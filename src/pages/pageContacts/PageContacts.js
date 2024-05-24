import { useTranslation } from 'react-i18next';
import ContactList from '../../components/contactList';
import PageTitle from '../../components/pageTitle';

const PageContacts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageTitle name={t('contacts.title')} />
      <div className="container">
        <ContactList />
      </div>
    </div>
  );
};

export default PageContacts;
