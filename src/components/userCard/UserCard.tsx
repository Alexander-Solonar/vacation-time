import { useTranslation } from 'react-i18next';
import userAvatar from '../../assets/images/user-avatar.png';
import scss from './UserCard.module.scss';

const UserCard = () => {
  const { t } = useTranslation();

  return (
    <div className={scss['user-card']}>
      <div className={scss['info-block']}>
        <div>
          <img
            className={scss['user-avatar']}
            src={userAvatar}
            alt="default-user-avatar"
          />
          <div className={scss['buttons-block']}>
            <button className={scss['change-avatar-btn']}>
              {t('account.change-avatar-btn')}
            </button>
            <button className={scss['setting-btn']}>
              {t('account.settings-btn')}
            </button>
          </div>
        </div>
        <ul className={scss['info-list']}>
          <li className={scss['info-item']}>
            <p>
              <span className={scss['text']}>Петров Іван Іванович</span>
            </p>
          </li>
          <li className={scss['info-item']}>
            <p>
              <span className={scss['text']}>{t('account.sex')}: </span>
              <span className={scss['text-info']}> чоловіча</span>
            </p>
          </li>
          <li className={scss['info-item']}>
            <p>
              <span className={scss['text']}>{t('account.date-birth')}: </span>
              <span className={scss['text-info']}> 10. 02. 1998</span>
            </p>
          </li>
          <li className={scss['info-item']}>
            <p>
              <span className={scss['text']}>{t('account.phone')}: </span>
              <span className={scss['text-info']}> +38(097)346-72-50</span>
            </p>
          </li>
          <li className={scss['info-item']}>
            <p>
              <span className={scss['text']}>{t('account.email')}: </span>
              <span className={scss['text-info']}> petrov@gmail.com</span>
            </p>
          </li>
        </ul>
      </div>
      <button className={scss['exit-btn']}>{t('account.exit-btn')}</button>
    </div>
  );
};

export default UserCard;
