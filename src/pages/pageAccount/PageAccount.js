import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MainTitle from '../../components/mainTitle';
import UserCard from '../../components/userCard';
import Loader from '../../components/loader';

const PageAccount = () => {
  const { t } = useTranslation();
  const { isLoading } = useSelector(state => state.data);

  return (
    <div>
      <MainTitle name={t('account.title')} />
      <div className="container">{!isLoading ? <Loader /> : <UserCard />}</div>
    </div>
  );
};

export default PageAccount;
