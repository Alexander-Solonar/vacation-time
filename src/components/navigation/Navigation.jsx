import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    { path: '/', label: 'header.home' },
    { path: '/about-us', label: 'header.about-us' },
    { path: '/reserve', label: 'header.reserve' },
    { path: '/contacts', label: 'header.contacts' },
    { path: '/account', label: 'header.account', state: { from: location } },
  ];

  const linkClassName = ({ isActive }) =>
    clsx(styles.link, { [styles.active]: isActive });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(({ path, label, state }) => (
          <li key={path} className={styles.item}>
            <NavLink className={linkClassName} to={path} state={state}>
              {t(label)}
            </NavLink>
            <div className={styles.line}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
