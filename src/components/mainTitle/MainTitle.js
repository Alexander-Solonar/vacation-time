import styles from './MainTitle.module.scss';

const MainTitle = ({ name }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  );
};

export default MainTitle;
