import icons from '../../assets/images/icons.svg';
import styles from './BookingTable.module.scss';

const BookingTable = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.cellCapacity}>Вміщує</th>
          <th className={styles.cellType}>Тип розміщення</th>
          <th className={styles.cellPrice}>Ціна</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr>
          <td className={styles.cellCapacity}>
            <ul className={styles.iconList}>
              <li>
                <svg width={45} height={55}>
                  <use href={`${icons}#icon-person`}></use>
                </svg>
              </li>
              <li>
                <svg width={45} height={55}>
                  <use href={`${icons}#icon-person`}></use>
                </svg>
              </li>
            </ul>
          </td>
          <td className={styles.cellType}>
            <div className={styles.roomInfo}>
              <p className={styles.roomDescription}>
                <span>Двомісний номер</span>
                <span>1 широке двоспальне ліжко</span>
              </p>
              <svg width={83} height={30}>
                <use href={`${icons}#icon-bed`}></use>
              </svg>
            </div>
          </td>
          <td className={styles.cellPrice}>
            <button className={styles.priceButton}>Показати ціни</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingTable;
