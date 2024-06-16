import icons from '../../../assets/images/icons.svg';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePickerInput.module.scss';

const DatePickerInput = ({ label, selectedDate, ...props }) => {
  const datePickerConfig = {
    ...props,
    selected: selectedDate,
    showIcon: true,
    placeholderText: 'dd/MM/yyyy',
    className: styles.input,
    icon: (
      <svg className={styles.iconCalendar}>
        <use href={`${icons}#icon-calendar`} />
      </svg>
    ),
  };

  return (
    <li>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <ReactDatePicker {...datePickerConfig} />
        <svg className={styles.iconArrow} width="32" height="32">
          <use href={`${icons}#icon-arrow-down`} />
        </svg>
      </div>
    </li>
  );
};

export default DatePickerInput;
