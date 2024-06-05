import icons from '../../../assets/images/icons.svg';
import styles from './GuestInput.module.scss';

const GuestInput = ({ label, value, setValue, min, max }) => {
  return (
    <li className={styles.item}>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <input className={styles.input} type="number" value={value} readOnly />
        <div className={styles.buttonsBlock}>
          <button
            className={styles.button}
            onClick={() => setValue(value + 1)}
            disabled={value >= max}
          >
            <svg width={12} height={18}>
              <use href={`${icons}#input-arrow-up`} />
            </svg>
          </button>
          <button
            className={styles.button}
            onClick={() => setValue(value - 1)}
            disabled={value <= min}
          >
            <svg width={12} height={18}>
              <use href={`${icons}#input-arrow-down`} />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default GuestInput;
