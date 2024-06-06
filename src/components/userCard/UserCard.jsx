import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../redux/auth/operations';
import AvatarEditForm from 'components/forms/avatarEditForm';
import ProfileEditForm from 'components/forms/profileEditForm';
import userAvatar from '../../assets/images/user-avatar.png';

import styles from './UserCard.module.scss';

const UserCard = () => {
  const [showProfileEditForm, setShownProfileEditForm] = useState(false);
  const [showAvatarEditForm, setShowAvatarEditForm] = useState(false);
  const { name, gender, dob, phone, email, avatarURL } = useSelector(
    state => state.data.user || ''
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  const userInfo = [
    { label: '', value: name },
    { label: t('account.gender'), value: gender },
    { label: t('account.date-birth'), value: dob },
    { label: t('account.phone'), value: phone },
    { label: t('account.email'), value: email },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.infoContainer}>
        <div>
          <div className={styles.avatarImageContainer}>
            <img
              className={styles.avatarImage}
              src={avatarURL ? avatarURL : userAvatar}
              alt="default-user-avatar"
            />
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.changeAvatarButton}
              onClick={() => setShowAvatarEditForm(true)}
            >
              {t('account.change-avatar-btn')}
            </button>
            <button
              className={styles.settingButton}
              onClick={() => setShownProfileEditForm(true)}
            >
              {t('account.settings-btn')}
            </button>
          </div>
        </div>
        <ul className={styles.list}>
          {userInfo.map(({ label, value }, index) => (
            <li className={styles.item} key={index}>
              <p>
                {label && <span className={styles.label}>{label}:</span>}
                <span className={styles.value}> {value}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.logoutButton} onClick={handleClick}>
        {t('account.exit-btn')}
      </button>
      {showProfileEditForm && (
        <ProfileEditForm onClose={setShownProfileEditForm} />
      )}
      {showAvatarEditForm && <AvatarEditForm onClose={setShowAvatarEditForm} />}
    </div>
  );
};

export default UserCard;
