import styles from './PageTitle.module.scss';

const PageTitle = ({ name }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  );
};

export default PageTitle;
