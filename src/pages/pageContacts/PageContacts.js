import { useTranslation } from 'react-i18next';
import ContactList from '../../components/contactList';
import PageTitle from '../../components/pageTitle';
import scss from './PageContacts.module.scss';

const PageContacts = () => {
  const { t } = useTranslation();

  return (
    <div className={scss['page-contact']}>
      <PageTitle name={t('contacts.title')} />
      <div className="container">
        <ContactList />
      </div>
    </div>
  );
};

export default PageContacts;
