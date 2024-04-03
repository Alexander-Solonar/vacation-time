import Filter from '../../components/filter';
import HousesList from '../../components/housesList';
import PageTitle from '../../components/pageTitle';
import scss from './Reserve.module.scss';

const Reserve = () => {
  return (
    <div className={scss['page-reserve']}>
      <PageTitle name="Забронювати будиночок" />
      <div className="container">
        <Filter />
        <HousesList />
      </div>
    </div>
  );
};

export default Reserve;
