import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PageTitle from '../../components/pageTitle';
import UserCard from '../../components/userCard';
import Backdrop from '../../components/backdrop';
import { fetchUserData } from '../../redux/operations';
import Loader from '../../components/loader';

const PageAccount = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { uid, token } = useSelector(state => state.auth);
  const { isLoading } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);

  return (
    <div>
      <PageTitle name={t('account.title')} />
      <div className="container">
        {token ? <UserCard /> : <Backdrop />}
        {!isLoading && <Loader />}
      </div>
    </div>
  );
};

export default PageAccount;
