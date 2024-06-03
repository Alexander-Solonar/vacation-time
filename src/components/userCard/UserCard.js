import { useTranslation } from 'react-i18next';
import userAvatar from '../../assets/images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

import { useState } from 'react';
import styles from './UserCard.module.scss';
import AvatarUploader from 'components/avatarUploader';
import EditProfileForm from 'components/forms/editProfileForm/EditProfileForm';

const UserCard = () => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [isOpenAvatarUploader, setIsOpenAvatarUploader] = useState(false);
  const { user, isLoading } = useSelector(state => state.data);
  const { name, gender, age, phone, email, avatarURL } = useSelector(
    state => state.data.user || ''
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  const userInfo = [
    { value: name },
    { label: t('account.sex'), value: gender },
    { label: t('account.date-birth'), value: age },
    { label: t('account.phone'), value: phone },
    { label: t('account.email'), value: email },
  ];

  return (
    <>
      {isLoading && (
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
                  onClick={() => setIsOpenAvatarUploader(true)}
                >
                  {t('account.change-avatar-btn')}
                </button>
                <button
                  className={styles.settingButton}
                  onClick={() => setIsOpenEditForm(true)}
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
          {isOpenEditForm && (
            <EditProfileForm items={user} onClose={setIsOpenEditForm} />
          )}
          {isOpenAvatarUploader && (
            <AvatarUploader onClose={setIsOpenAvatarUploader} />
          )}
        </div>
      )}
    </>
  );
};

export default UserCard;
