import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/pageTitle';
import UserCard from '../../components/userCard';
import Backdrop from '../../components/backdrop';
import { useSelector } from 'react-redux';
import './PageAccount.scss';

const PageAccount = () => {
  const { t } = useTranslation();
  const token = useSelector(state => state.auth.token);

  return (
    <div className="page-account">
      <PageTitle name={t('account.title')} />
      <div className="container">
        <UserCard />
        {!token && <Backdrop />}
      </div>
    </div>
  );
};

export default PageAccount;
