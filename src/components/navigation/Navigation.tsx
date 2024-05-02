import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import scss from './Navigation.module.scss';
import { clsx } from 'clsx';

interface Active {
  isActive: boolean;
}

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const linkClassName = ({ isActive }: Active) => {
    const className = clsx(scss.link, { [scss.active]: isActive });
    return className;
  };

  return (
    <nav className={scss.nav}>
      <ul className={scss.list}>
        <li className={scss.item}>
          <NavLink className={linkClassName} to="/">
            {t('header.home')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={linkClassName} to="/about-us">
            {t('header.about-us')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={linkClassName} to="/reserve">
            {t('header.reserve')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={linkClassName} to="/contacts">
            {t('header.contacts')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink
            className={linkClassName}
            to="/account"
            state={{ from: location }}
          >
            {t('header.account')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
      </ul>
    </nav>
  );
};

export default Navigation;
