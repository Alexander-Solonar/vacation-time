import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import clsx from 'clsx';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { isOpenMobMenu, setIsOpenMobMenu } = useContext(Context);

  const links = [
    { path: '/', label: 'header.home' },
    { path: '/about-us', label: 'header.about-us' },
    { path: '/reserve', label: 'header.reserve' },
    { path: '/contacts', label: 'header.contacts' },
    { path: '/account', label: 'header.account', state: { from: location } },
  ];

  const handleClickCloseMenu = e => {
    if (e.target.nodeName === 'A' || e.target.nodeName === 'DIV')
      setIsOpenMobMenu(false);
  };

  const linkClassName = ({ isActive }) =>
    clsx(styles.link, { [styles.active]: isActive });

  return (
    <div
      className={clsx(styles.wrapper, isOpenMobMenu && styles.menuIsOpen)}
      onClick={handleClickCloseMenu}
    >
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(({ path, label, state }) => (
            <li key={path} className={styles.item}>
              <NavLink className={linkClassName} to={path} state={state}>
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
