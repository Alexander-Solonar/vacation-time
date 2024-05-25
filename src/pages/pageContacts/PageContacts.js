import { useTranslation } from 'react-i18next';
import ContactList from '../../components/contactList';
import MainTitle from '../../components/mainTitle';

const PageContacts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <MainTitle name={t('contacts.title')} />
      <div className="container">
        <ContactList />
      </div>
    </div>
  );
};

export default PageContacts;
