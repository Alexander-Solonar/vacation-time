import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import styles from './LangSwitchMenu.module.scss';

const LangSwitchMenu = () => {
  const { setIsOpenMenuLang } = useContext(Context);
  const { i18n } = useTranslation();
  const arrLanguages = i18n.languages;

  const changeLanguage = lng => {
    i18n.changeLanguage(lng.toLocaleLowerCase());
    setIsOpenMenuLang(false);
  };

  return (
    <ul className={styles.list}>
      {arrLanguages.map((lang, index) => (
        <li key={index} className={styles.item}>
          <button
            className={styles.button}
            onClick={e => changeLanguage(e.target.innerText)}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitchMenu;
