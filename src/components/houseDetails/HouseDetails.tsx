import CottageDisplay from '../cottageDisplay';
import icons from '../../assets/images/icons.svg';
import scss from './HouseDetails.module.scss';

const HouseDetails = () => {
  return (
    <div>
      <CottageDisplay />

      <table className={scss['table']}>
        <thead className={scss['table-thead']}>
          <tr>
            <th className={scss['thead-column-contains']}>Вміщує</th>
            <th className={scss['thead-column-type']}>Тип розміщення</th>
            <th className={scss['thead-column-price']}>Ціна</th>
          </tr>
        </thead>
        <tbody className={scss['table-tbody']}>
          <tr>
            <td className={scss['tbody-column-contains']}>
              <ul className={scss['icon-block']}>
                <li>
                  <svg className={scss.icon} width={45} height={55}>
                    <use href={`${icons}#icon-person`}></use>
                  </svg>
                </li>
                <li>
                  <svg className={scss.icon} width={45} height={55}>
                    <use href={`${icons}#icon-person`}></use>
                  </svg>
                </li>
              </ul>
            </td>
            <td className={scss['tbody-column-type']}>
              <div className={scss['tbody-column-type-content']}>
                <p className={scss['tbody-column-type-text']}>
                  <span>Двомісний номер</span>
                  <span>1 широке двоспальне ліжко</span>
                </p>
                <svg className={scss.icon} width={83} height={30}>
                  <use href={`${icons}#icon-bed`}></use>
                </svg>
              </div>
            </td>
            <td className={scss['tbody-column-price']}>
              <button className={scss['button']}>Показати ціни</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseDetails;
