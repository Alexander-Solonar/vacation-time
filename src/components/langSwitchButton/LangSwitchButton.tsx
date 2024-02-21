import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import LangSwitchMenu from '../langSwitchMenu';
import icon from '../../assets/images/icon-lng.svg';
import scss from './LangSwitchButton.module.scss';

const LangSwitchButton = () => {
  const { isOpenMenuLang, setIsOpenMenuLang } = useContext(Context);
  const { i18n } = useTranslation();

  const handleClick = () => {
    setIsOpenMenuLang(prevState => !prevState);
  };

  return (
    <div className={scss.containerBtnLang}>
      <button className={scss.buttonLang} onClick={handleClick}>
        <img src={icon} alt="icon-lang" width={60} />
        <span className={scss.lang}>{i18n.resolvedLanguage}</span>
      </button>
      {isOpenMenuLang && <LangSwitchMenu />}
    </div>
  );
};

export default LangSwitchButton;
