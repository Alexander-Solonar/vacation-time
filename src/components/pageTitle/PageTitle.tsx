import { FC } from 'react';
import scss from './PageTitle.module.scss';

interface PaPageTitleProps {
  name: string;
}

const PageTitle: FC<PaPageTitleProps> = ({ name }) => {
  return (
    <div className={scss['box-title']}>
      <h1 className={scss.title}>{name}</h1>
    </div>
  );
};

export default PageTitle;
