import HouseDetails from '../../components/houseDetails';
import PageTitle from '../../components/pageTitle';

const PageHouseBooking = () => {
  return (
    <div>
      <PageTitle name="Бронювання будиночка в" />
      <div className="container">
        <HouseDetails />
      </div>
    </div>
  );
};

export default PageHouseBooking;
