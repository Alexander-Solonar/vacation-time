import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { fetchHouses } from '../../firebase/APIFirebase';
import icons from '../../assets/images/icons.svg';
import 'swiper/scss';
import styles from './SlideSwiper.module.scss';

const SlideSwiper = () => {
  const [housesList, setHousesList] = useState([]);
  const { i18n, t } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    fetchHouses(setHousesList, lng);
  }, [lng]);

  const adaptedText = text =>
    text.length > 177 ? text.slice(0, 177) + '...' : text;

  return (
    <section>
      <div className="container">
        <Swiper {...swiperConfig}>
          {housesList.map(el => (
            <SwiperSlide key={el.id}>
              <div className={styles.content}>
                <img src={el.picture} alt="house" width={1233} />
              </div>

              <div className={styles.blockDesc}>
                <p className={styles.text}>{adaptedText(el.text)}</p>
                <Link className={styles.button} to={`/reserve/house-${el.id}`}>
                  {t('swiper.button')}
                  <svg width={28} height={14}>
                    <use href={`${icons}#icon-arrow`}></use>
                  </svg>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          <div className={styles.swiperButtonPrev}>
            <svg className={styles.icon} width={51} height={101}>
              <use href={`${icons}#button-swiper-nav`}></use>
            </svg>
          </div>
          <div className={styles.swiperButtonNext}>
            <svg className={styles.icon} width={51} height={101}>
              <use href={`${icons}#button-swiper-nav`}></use>
            </svg>
          </div>
          <div className={styles['swiper-pagination']}></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SlideSwiper;

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    clickable: true,
    el: `.${styles['swiper-pagination']}`,
    bulletClass: `${styles.swiperPaginationBullet}`,
    bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
  },
  navigation: {
    prevEl: `.${styles.swiperButtonPrev}`,
    nextEl: `.${styles.swiperButtonNext}`,
  },
  modules: [Pagination, Navigation],
  className: styles.mySwiper,
};
