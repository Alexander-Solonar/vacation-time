import { useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
import styles from './Backdrop.module.scss';

const Backdrop = ({ children }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <div className={styles.backdrop}>
      <Link className={styles.backLink} to={backLinkHref.current} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Backdrop;
