import { useTranslation } from 'react-i18next';
import userAvatar from '../../assets/images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import './UserCard.scss';
import EditProfileForm from '../editProfileForm';
import { useState } from 'react';

const UserCard = () => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.data);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isLoading && (
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
                <button
                  className="setting-btn"
                  onClick={() => setIsOpenEditForm(true)}
                >
                  {t('account.settings-btn')}
                </button>
              </div>
            </div>
            <ul className="info-list">
              <li className="info-item">
                <p>
                  <span className="text">{items.name}</span>
                </p>
              </li>
              <li className="info-item">
                <p>
                  <span className="text">{t('account.sex')}: </span>
                  <span className="text-info"> {items.gender}</span>
                </p>
              </li>
              <li className="info-item">
                <p>
                  <span className="text">{t('account.date-birth')}: </span>
                  <span className="text-info"> {items.age}</span>
                </p>
              </li>
              <li className="info-item">
                <p>
                  <span className="text">{t('account.phone')}: </span>
                  <span className="text-info"> {items.phone}</span>
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
          {isOpenEditForm && (
            <EditProfileForm items={items} closeForm={setIsOpenEditForm} />
          )}
        </div>
      )}
    </>
  );
};

export default UserCard;
