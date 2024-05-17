import { useState } from 'react';
import icons from '../../assets/images/icons.svg';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerValue.scss';

const DatePickerValue = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);

  return (
    <div className="date-picker">
      <h3 className="date-picker__title">
        Коли б Ви хотіли зупинись в помешканні Полонини Карпат?
      </h3>
      <div className="date-picker__content">
        <div>
          <ul className="date-picker__list">
            <li className="date-picker__item">
              <p className="date-picker__label">Дата заїзду</p>
              <div className="date-picker__input">
                <ReactDatePicker
                  showIcon
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Дата заїзду"
                  icon={
                    <svg>
                      <use href={`${icons}#icon-calendar`} />
                    </svg>
                  }
                  onChange={date => setStartDate(date)}
                />
                <svg className="date-picker__input-icon" width="32" height="32">
                  <use href={`${icons}#icon-arrow-down`} />
                </svg>
              </div>
            </li>
            <li className="date-picker__item">
              <p className="date-picker__label">Дата виїзду</p>
              <div className="date-picker__input">
                <ReactDatePicker
                  showIcon
                  selectsEnd
                  selected={endDate}
                  dateFormat="dd/MM/yyyy"
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Дата виїзду"
                  icon={
                    <svg>
                      <use href={`${icons}#icon-calendar`} />
                    </svg>
                  }
                  onChange={date => setEndDate(date)}
                />
                <svg className="date-picker__input-icon" width="32" height="32">
                  <use href={`${icons}#icon-arrow-down`} />
                </svg>
              </div>
            </li>
          </ul>

          <ul className="guest-selection">
            <li className="guest-selection__item">
              <p className="date-picker__label">Номери</p>
              <div className="guest-selection__input-container">
                <input type="number" value={rooms} readOnly />
                <div className="guest-selection__buttons">
                  <button
                    className="button-up"
                    onClick={() => setRooms(rooms + 1)}
                    disabled={rooms > 8}
                  >
                    <svg width={12} height={18}>
                      <use href={`${icons}#input-arrow-up`} />
                    </svg>
                  </button>
                  <button
                    className="button-down"
                    onClick={() => setRooms(rooms - 1)}
                    disabled={rooms < 2}
                  >
                    <svg width={12} height={18}>
                      <use href={`${icons}#input-arrow-down`} />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className="guest-selection__item">
              <p className="date-picker__label">Дорослі</p>
              <div className="guest-selection__input-container">
                <input type="number" value={adults} readOnly />
                <div className="guest-selection__buttons">
                  <button
                    className="button-up"
                    onClick={() => setAdults(adults + 1)}
                    disabled={adults > 8}
                  >
                    <svg width={12} height={18}>
                      <use href={`${icons}#input-arrow-up`} />
                    </svg>
                  </button>
                  <button
                    className="button-down"
                    onClick={() => setAdults(adults - 1)}
                    disabled={adults < 1}
                  >
                    <svg width={12} height={18}>
                      <use href={`${icons}#input-arrow-down`} />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className="guest-selection__item">
              <p className="date-picker__label">Діти</p>
              <div className="guest-selection__input-container">
                <input type="number" value={kids} readOnly />
                <div className="guest-selection__buttons">
                  <button
                    className="button-up"
                    onClick={() => setKids(kids + 1)}
                    disabled={kids > 8}
                  >
                    <svg width={12} height={18}>
                      <use href={`${icons}#input-arrow-up`} />
                    </svg>
                  </button>
                  <button
                    className="button-down"
                    onClick={() => setKids(kids - 1)}
                    disabled={kids < 1}
                  >
                    <svg width={12} height={18}>
                      <use href={`${icons}#input-arrow-down`} />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className="date-picker__button" type="submit">
          Перевірити наявність вільних місць
        </button>
      </div>
    </div>
  );
};

export default DatePickerValue;
