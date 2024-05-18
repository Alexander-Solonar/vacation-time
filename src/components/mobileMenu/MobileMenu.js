import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import clsx from 'clsx';

import scss from './MobileMenu.module.scss';

const MobileMenu = () => {
  const { t } = useTranslation();
  const { isOpenMobMenu, setIsOpenMobMenu } = useContext(Context);

  const handleClickCloseMenu = e => {
    if (e.target.nodeName === 'A') setIsOpenMobMenu(false);
  };

  const linkClassName = ({ isActive }) => {
    const className = clsx(scss['mob-menu-link'], { [scss.active]: isActive });
    return className;
  };

  return (
    <div
      className={clsx(
        scss['mob-menu'],
        isOpenMobMenu && scss['mob-menu-is-open']
      )}
      onClick={handleClickCloseMenu}
    >
      <nav className={scss['mob-menu-nav']}>
        <ul className={scss['mob-menu-list']}>
          <li className={scss['mob-menu-item']}>
            <NavLink className={linkClassName} to="/">
              {t('header.home')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={linkClassName} to="/about-us">
              {t('header.about-us')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={linkClassName} to="/reserve">
              {t('header.reserve')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={linkClassName} to="/contacts">
              {t('header.contacts')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={linkClassName} to="/account">
              {t('header.account')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
