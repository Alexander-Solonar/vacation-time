import CottageGallery from '../../components/cottageGallery';
import BookingForm from '../../components/bookingForm';
import BookingTable from '../../components/bookingTable';
import MainTitle from '../../components/mainTitle';
import styles from './PageCottageBooking.module.scss';

const PageCottageBooking = () => {
  return (
    <>
      <MainTitle name="Бронювання будиночка в" />
      <div className="container">
        <CottageGallery />
        <h2 className={styles.bookingTitle}>Наявність місць</h2>
        <BookingForm />
        <BookingTable />
      </div>
    </>
  );
};

export default PageCottageBooking;
