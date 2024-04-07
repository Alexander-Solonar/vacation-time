import PageTitle from '../../components/pageTitle';
import UserCard from '../../components/userCard';
import scss from './PageAccount.module.scss';

const PageAccount = () => {
  return (
    <div className={scss['page-account']}>
      <PageTitle name="Особистий кабінет" />
      <div className="container">
        <UserCard />
      </div>
    </div>
  );
};

export default PageAccount;
