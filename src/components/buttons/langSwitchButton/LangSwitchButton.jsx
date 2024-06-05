import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../../context/Context';
import LangSwitchMenu from 'components/common/langSwitchMenu';
import icons from '../../../assets/images/icons.svg';
import styles from './LangSwitchButton.module.scss';

const LangSwitchButton = () => {
  const { isOpenMenuLang, setIsOpenMenuLang } = useContext(Context);
  const { i18n } = useTranslation();

  const handleClick = () => {
    setIsOpenMenuLang(prevState => !prevState);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <svg className={styles.icon} width={50} height={50}>
          <use href={`${icons}#lang`}></use>
        </svg>
        <span className={styles.language}>{i18n.resolvedLanguage}</span>
      </button>
      {isOpenMenuLang && <LangSwitchMenu />}
    </div>
  );
};

export default LangSwitchButton;
