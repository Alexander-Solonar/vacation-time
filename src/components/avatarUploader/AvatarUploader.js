import React, { useState } from 'react';
import styles from './AvatarUploader.module.scss';
import icons from '../../assets/images/icons.svg';
import userAvatar from '../../assets/images/user-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, removeAvatar } from '../../redux/operations';

const AvatarUploader = ({ onClose }) => {
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth);
  const { avatarURL } = useSelector(state => state.data.user);

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
              src={avatarURL ? avatarURL : preview ? preview : userAvatar}
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
              Удалить фото
            </button>
          )}

          <label htmlFor="fileInput" className={styles.inputLabel}>
            Выбрать файл
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
            Загрузить аватар
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvatarUploader;
