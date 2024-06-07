import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeAvatar, removeAvatar } from '../../../redux/operations';
import userAvatar from '../../../assets/images/user-avatar.png';
import icons from '../../../assets/images/icons.svg';

import styles from './AvatarEditForm.module.scss';

const AvatarEditForm = ({ onClose }) => {
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const { uid } = useSelector(state => state.auth);
  const { avatarURL } = useSelector(state => state.data.user);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];

    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setAvatar(null);
    setPreview(null);
    if (avatarURL) {
      dispatch(removeAvatar({ uid }));
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(changeAvatar({ avatar, uid, preview }));
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={() => onClose(false)}>
          <svg width="32" height="32">
            <use href={`${icons}#icon-close-menu`}></use>
          </svg>
        </button>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.previewContainer}>
            <img
              src={preview ? preview : avatarURL ? avatarURL : userAvatar}
              alt="Avatar Preview"
              className={styles.previewImage}
            />
          </div>

          {(avatarURL || preview) && (
            <button
              type="button"
              className={styles.inputLabel}
              onClick={handleRemovePhoto}
            >
              {t('avatar.remove-photo')}
            </button>
          )}

          <label htmlFor="fileInput" className={styles.inputLabel}>
            {t('avatar.select-file')}
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!avatar}
          >
            {t('avatar.download-avatar-btn')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvatarEditForm;
