import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import icons from '../../assets/images/icons.svg';
import img from '../../assets/images/image 3.webp';
import 'swiper/scss';

import styles from './SlideSwiper.module.scss';

const array = [1, 2, 3, 4, 5, 6];

const SlideSwiper = () => {
  const { t } = useTranslation();

  const textInitial = t('swiper.text');

  const text =
    textInitial.length > 177 ? textInitial.slice(0, 177) + '...' : textInitial;

  return (
    <section>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: `.${styles['swiper-pagination']}`,
            bulletClass: `${styles.swiperPaginationBullet}`,
            bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
          }}
          navigation={{
            prevEl: `.${styles.swiperButtonPrev}`,
            nextEl: `.${styles.swiperButtonNext}`,
          }}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {array.map(e => (
            <SwiperSlide key={e}>
              <div className={styles.content}>
                <img src={img} alt="house" />
              </div>

              <div className={styles.blockDesc}>
                <p className={styles.text}>{text}</p>
                <button className={styles.button}>
                  {t('swiper.button')}
                  <svg width={28} height={14}>
                    <use href={`${icons}#icon-arrow`}></use>
                  </svg>
                </button>
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
