import icons from '../../../assets/images/icons.svg';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePickerInput.module.scss';

const DatePickerInput = ({
  label,
  selectedDate,
  onChange,
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  minDate,
  placeholderText,
}) => {
  return (
    <li>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <ReactDatePicker
          className={styles.input}
          showIcon
          selectsStart={selectsStart}
          selectsEnd={selectsEnd}
          selected={selectedDate}
          dateFormat="dd/MM/yyyy"
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          placeholderText={placeholderText}
          icon={
            <svg className={styles.iconCalendar}>
              <use href={`${icons}#icon-calendar`} />
            </svg>
          }
          onChange={onChange}
        />
        <svg className={styles.iconArrow} width="32" height="32">
          <use href={`${icons}#icon-arrow-down`} />
        </svg>
      </div>
    </li>
  );
};

export default DatePickerInput;
