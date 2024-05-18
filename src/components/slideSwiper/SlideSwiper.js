import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import icons from '../../assets/images/icons.svg';
import img from '../../assets/images/image 3.webp';
import 'swiper/scss';

import scss from './SlideSwiper.module.scss';

const array = [1, 2, 3, 4, 5, 6];

const SlideSwiper = () => {
  const { t } = useTranslation();

  const textInitial = t('swiper.text');

  const text =
    textInitial.length > 177 ? textInitial.slice(0, 177) + '...' : textInitial;

  return (
    <section className={scss['slide-swiper']}>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Pagination, Navigation]}
          className={scss.mySwiper}
        >
          {array.map(e => (
            <SwiperSlide key={e}>
              <div className={scss.content}>
                <img src={img} alt="house" />
              </div>

              <div className={scss.blockDesc}>
                <p className={scss.text}>{text}</p>
                <button className={scss.button}>
                  {t('swiper.button')}
                  <svg width={28} height={14}>
                    <use href={`${icons}#icon-arrow`}></use>
                  </svg>
                </button>
              </div>
              <button className={scss.btn}>
                {t('swiper.button')}
                <svg className={scss.icon} width={24} height={10}>
                  <use href={`${icons}#icon-arrow`}></use>
                </svg>
              </button>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev">
            <svg className={scss.icon} width={51} height={101}>
              <use href={`${icons}#button-swiper-nav`}></use>
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg className={scss.icon} width={51} height={101}>
              <use href={`${icons}#button-swiper-nav`}></use>
            </svg>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SlideSwiper;
