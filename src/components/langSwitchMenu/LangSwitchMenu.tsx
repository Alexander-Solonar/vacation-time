import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import scss from './LangSwitchMenu.module.scss';

const LangSwitchMenu = () => {
  const { setIsOpenMenuLang } = useContext(Context);
  const { i18n } = useTranslation();
  const arrLanguages = i18n.languages;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng.toLocaleLowerCase());
    setIsOpenMenuLang(false);
  };

  return (
    <ul className={scss.list}>
      {arrLanguages.map((lang, index) => (
        <li key={index} className={scss.item}>
          <button
            className={scss['lang-btn']}
            onClick={e =>
              changeLanguage((e.target as HTMLButtonElement).innerText)
            }
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitchMenu;
