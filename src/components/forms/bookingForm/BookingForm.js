import { useState } from 'react';
import DatePickerInput from 'components/datePickerInput';
import styles from './BookingForm.module.scss';
import GuestInput from '../guestInput';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        Коли б Ви хотіли зупинись в помешканні Полонини Карпат?
      </h3>
      <div className={styles.content}>
        <ul className={styles.datePickerList}>
          <DatePickerInput
            label="Дата заїзду"
            selectedDate={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Дата заїзду"
          />
          <DatePickerInput
            label="Дата виїзду"
            selectedDate={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Дата виїзду"
          />
        </ul>

        <ul className={styles.guestInputList}>
          <GuestInput
            label="Номери"
            value={rooms}
            setValue={setRooms}
            min={1}
            max={8}
          />
          <GuestInput
            label="Дорослі"
            value={adults}
            setValue={setAdults}
            min={0}
            max={8}
          />
          <GuestInput
            label="Діти"
            value={kids}
            setValue={setKids}
            min={0}
            max={8}
          />
        </ul>

        <button className={styles.submitButton} type="submit">
          Перевірити наявність вільних місць
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
