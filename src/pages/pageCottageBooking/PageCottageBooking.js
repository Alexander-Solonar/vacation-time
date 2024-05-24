import CottageGallery from '../../components/cottageGallery';
import BookingForm from '../../components/bookingForm';
import BookingTable from '../../components/bookingTable';
import PageTitle from '../../components/pageTitle';
import styles from './PageCottageBooking.module.scss';

const PageCottageBooking = () => {
  return (
    <>
      <PageTitle name="Бронювання будиночка в" />
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
