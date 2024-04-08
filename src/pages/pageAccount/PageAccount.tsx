import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/pageTitle';
import UserCard from '../../components/userCard';
import scss from './PageAccount.module.scss';

const PageAccount = () => {
  const { t } = useTranslation();

  return (
    <div className={scss['page-account']}>
      <PageTitle name={t('account.title')} />
      <div className="container">
        <UserCard />
      </div>
    </div>
  );
};

export default PageAccount;
