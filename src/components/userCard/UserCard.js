import { useTranslation } from 'react-i18next';
import userAvatar from '../../assets/images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import EditProfileForm from '../editProfileForm';
import { useState } from 'react';
import styles from './UserCard.module.scss';

const UserCard = () => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.data);

  const handleClick = () => {
    dispatch(logOut());
  };

  const userInfo = [
    { value: items.name },
    { label: t('account.sex'), value: items.gender },
    { label: t('account.date-birth'), value: items.age },
    { label: t('account.phone'), value: items.phone },
    { label: t('account.email'), value: items.email },
  ];

  return (
    <>
      {isLoading && (
        <div className={styles.content}>
          <div className={styles.infoContainer}>
            <div>
              <img
                className={styles.avatarImage}
                src={userAvatar}
                alt="default-user-avatar"
              />
              <div className={styles.buttonsContainer}>
                <button className={styles.changeAvatarButton}>
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
                    {label && <span className={styles.label}>{label}: </span>}
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
            <EditProfileForm items={items} closeForm={setIsOpenEditForm} />
          )}
        </div>
      )}
    </>
  );
};

export default UserCard;

// import { useTranslation } from 'react-i18next';
// import userAvatar from '../../assets/images/user-avatar.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';
// import EditProfileForm from '../editProfileForm';
// import { useState } from 'react';
// import styles from './UserCard.module.scss';

// const UserCard = () => {
//   const [isOpenEditForm, setIsOpenEditForm] = useState(false);
//   const { t } = useTranslation();
//   const dispatch = useDispatch();
//   const { items, isLoading } = useSelector(state => state.data);

//   const handleClick = () => {
//     dispatch(logOut());
//   };

//   const userInfo = [
//     { value: items.name },
//     { label: t('account.sex'), value: items.gender },
//     { label: t('account.date-birth'), value: items.age },
//     { label: t('account.phone'), value: items.phone },
//     { label: t('account.email'), value: items.email },
//   ];

//   return (
//     <>
//       {isLoading && (
//         <div className="user-card">
//           <div className="info-block">
//             <div>
//               <img
//                 className="user-avatar"
//                 src={userAvatar}
//                 alt="default-user-avatar"
//               />
//               <div className="buttons-block">
//                 <button className="change-avatar-btn">
//                   {t('account.change-avatar-btn')}
//                 </button>
//                 <button
//                   className="setting-btn"
//                   onClick={() => setIsOpenEditForm(true)}
//                 >
//                   {t('account.settings-btn')}
//                 </button>
//               </div>
//             </div>
//             <ul className="info-list">
//               {userInfo.map(({ label, value }) => (
//                 <li className="info-item">
//                   <p>
//                     {label && <span className="text">{label}: </span>}
//                     <span className="text-info"> {value}</span>
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <button className="exit-btn" onClick={handleClick}>
//             {t('account.exit-btn')}
//           </button>
//           {isOpenEditForm && (
//             <EditProfileForm items={items} closeForm={setIsOpenEditForm} />
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default UserCard;
