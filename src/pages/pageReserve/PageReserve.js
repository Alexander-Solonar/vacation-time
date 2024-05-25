import Filter from '../../components/filter';
import HousesList from '../../components/housesList';
import MainTitle from '../../components/mainTitle';

const PageReserve = () => {
  return (
    <div>
      <MainTitle name="Забронювати будиночок" />
      <div className="container">
        <Filter />
        <HousesList />
      </div>
    </div>
  );
};

export default PageReserve;
