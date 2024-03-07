import { MouseEvent, useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';

import scss from './MobileMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
  const { t } = useTranslation();
  const { isOpenMobMenu, setIsOpenMobMenu } = useContext(Context);

  const handleClickCloseMenu = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).nodeName === 'A') setIsOpenMobMenu(false);
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
            <NavLink className={scss['mob-menu-link']} to="/">
              {t('header.home')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={scss['mob-menu-link']} to="/">
              {t('header.about-us')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={scss['mob-menu-link']} to="/">
              {t('header.reserve')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={scss['mob-menu-link']} to="/">
              {t('header.contacts')}
            </NavLink>
          </li>

          <li className={scss['mob-menu-item']}>
            <NavLink className={scss['mob-menu-link']} to="/">
              {t('header.account')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
