import { useTranslation } from 'react-i18next';
import userAvatar from '../../assets/images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import './UserCard.scss';
import { useEffect } from 'react';
import { fetchUserData } from '../../redux/operations';

const UserCard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const uid = useSelector(state => state.auth.uid);
  const { items } = useSelector(state => state.data);

  const handleClick = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);

  return (
    <div className="user-card">
      <div className="info-block">
        <div>
          <img
            className="user-avatar"
            src={userAvatar}
            alt="default-user-avatar"
          />
          <div className="buttons-block">
            <button className="change-avatar-btn">
              {t('account.change-avatar-btn')}
            </button>
            <button className="setting-btn">{t('account.settings-btn')}</button>
          </div>
        </div>
        <ul className="info-list">
          <li className="info-item">
            <p>
              <span className="text">Петров Іван Іванович</span>
            </p>
          </li>
          <li className="info-item">
            <p>
              <span className="text">{t('account.sex')}: </span>
              <span className="text-info"> чоловіча</span>
            </p>
          </li>
          <li className="info-item">
            <p>
              <span className="text">{t('account.date-birth')}: </span>
              <span className="text-info"> 10. 02. 1998</span>
            </p>
          </li>
          <li className="info-item">
            <p>
              <span className="text">{t('account.phone')}: </span>
              <span className="text-info"> +38(097)346-72-50</span>
            </p>
          </li>
          <li className="info-item">
            <p>
              <span className="text">{t('account.email')}: </span>
              <span className="text-info">{items.email}</span>
            </p>
          </li>
        </ul>
      </div>
      <button className="exit-btn" onClick={handleClick}>
        {t('account.exit-btn')}
      </button>
    </div>
  );
};

export default UserCard;
