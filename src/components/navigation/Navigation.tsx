import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={scss.nav}>
      <ul className={scss.list}>
        <li className={scss.item}>
          <NavLink className={scss.link} to="/">
            {t('header.home')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={scss.link} to="/about-us">
            {t('header.about-us')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={scss.link} to="/">
            {t('header.reserve')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={scss.link} to="/">
            {t('header.contacts')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
        <li className={scss.item}>
          <NavLink className={scss.link} to="/">
            {t('header.account')}
          </NavLink>
        </li>
        <li className={scss.line}></li>
      </ul>
    </nav>
  );
};

export default Navigation;
