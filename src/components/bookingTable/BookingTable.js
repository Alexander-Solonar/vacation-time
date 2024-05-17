import icons from '../../assets/images/icons.svg';
import './BookingTable.scss';

const BookingTable = () => {
  return (
    <div className="cottage-booking">
      <table className="table">
        <thead className="table-thead">
          <tr>
            <th className="thead-column-contains">Вміщує</th>
            <th className="thead-column-type">Тип розміщення</th>
            <th className="thead-column-price">Ціна</th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          <tr>
            <td className="tbody-column-contains">
              <ul className="icon-block">
                <li>
                  <svg className="icon" width={45} height={55}>
                    <use href={`${icons}#icon-person`}></use>
                  </svg>
                </li>
                <li>
                  <svg className="icon" width={45} height={55}>
                    <use href={`${icons}#icon-person`}></use>
                  </svg>
                </li>
              </ul>
            </td>
            <td className="tbody-column-type">
              <div className="tbody-column-type-content">
                <p className="tbody-column-type-text">
                  <span>Двомісний номер</span>
                  <span>1 широке двоспальне ліжко</span>
                </p>
                <svg className="icon" width={83} height={30}>
                  <use href={`${icons}#icon-bed`}></use>
                </svg>
              </div>
            </td>
            <td className="tbody-column-price">
              <button className="button">Показати ціни</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
