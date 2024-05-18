import scss from './PageTitle.module.scss';

const PageTitle = ({ name }) => {
  return (
    <div className={scss['box-title']}>
      <h1 className={scss.title}>{name}</h1>
    </div>
  );
};

export default PageTitle;
