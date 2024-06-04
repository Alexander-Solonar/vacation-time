import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MainTitle from 'components/common/mainTitle';
import Loader from 'components/common/loader';
import UserCard from 'components/userCard';

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
