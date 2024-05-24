import Filter from '../../components/filter';
import HousesList from '../../components/housesList';
import PageTitle from '../../components/pageTitle';

const PageReserve = () => {
  return (
    <div>
      <PageTitle name="Забронювати будиночок" />
      <div className="container">
        <Filter />
        <HousesList />
      </div>
    </div>
  );
};

export default PageReserve;
