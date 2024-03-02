import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import LangSwitchMenu from '../langSwitchMenu';
import icons from '../../assets/images/icons.svg';
import scss from './LangSwitchButton.module.scss';

const LangSwitchButton = () => {
  const { isOpenMenuLang, setIsOpenMenuLang } = useContext(Context);
  const { i18n } = useTranslation();

  const handleClick = () => {
    setIsOpenMenuLang(prevState => !prevState);
  };

  return (
    <div className={scss['block-lang-btn']}>
      <button className={scss['lang-btn']} onClick={handleClick}>
        <svg className={scss['lang-icon']} width={50} height={50}>
          <use href={`${icons}#lang`}></use>
        </svg>
        <span className={scss['btn-text']}>{i18n.resolvedLanguage}</span>
      </button>
      {isOpenMenuLang && <LangSwitchMenu />}
    </div>
  );
};

export default LangSwitchButton;
