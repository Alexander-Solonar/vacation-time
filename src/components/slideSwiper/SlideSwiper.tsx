import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import icons from '../../assets/images/icons.svg';
import img from '../../assets/images/image 3.webp';
import 'swiper/scss';

import scss from './SlideSwiper.module.scss';

const SlideSwiper = () => {
  const textInitial =
    'Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас.';

  const text =
    textInitial.length > 177 ? textInitial.slice(0, 177) + '...' : textInitial;

  return (
    <div className={scss.content}>
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
        className={`${scss.mySwiper}`}
      >
        <SwiperSlide>
          <div>
            <img src={img} alt="house" width={1233} />
          </div>

          <div className={scss.blockDesc}>
            <p className={scss.text}>{text}</p>
            <button className={scss.button}>
              Переглянути
              <svg width={28} height={14}>
                <use href={`${icons}#icon-arrow`}></use>
              </svg>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img} alt="house" width={1233} />
          </div>

          <div className={scss.blockDesc}>
            <p className={scss.text}>{text}</p>
            <button className={scss.button}>
              Переглянути
              <svg width={28} height={14}>
                <use href={`${icons}#icon-arrow`}></use>
              </svg>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img} alt="house" width={1233} />
          </div>

          <div className={scss.blockDesc}>
            <p className={scss.text}>{text}</p>
            <button className={scss.button}>
              Переглянути
              <svg width={28} height={14}>
                <use href={`${icons}#icon-arrow`}></use>
              </svg>
            </button>
          </div>
        </SwiperSlide>

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
  );
};

export default SlideSwiper;
