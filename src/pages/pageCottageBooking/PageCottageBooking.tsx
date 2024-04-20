import CottageGallery from '../../components/cottageGallery';
import DatePickerValue from '../../components/datePickerValue';
import BookingTable from '../../components/bookingTable';
import PageTitle from '../../components/pageTitle';
import './PageCottageBooking.scss';

const PageCottageBooking = () => {
  return (
    <>
      <PageTitle name="Бронювання будиночка в" />
      <div className="container">
        <CottageGallery />
        <h2 className="cottage-booking__title">Наявність місць</h2>
        <DatePickerValue />
        <BookingTable />
      </div>
    </>
  );
};

export default PageCottageBooking;
