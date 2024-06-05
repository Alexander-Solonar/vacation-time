import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval
        height={60}
        width={60}
        color="#202846"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#2e3963"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loader;
