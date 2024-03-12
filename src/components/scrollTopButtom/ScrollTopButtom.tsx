import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import icons from '../../assets/images/icons.svg';
import scss from './ScrollTopButtom.module.scss';

const ScrollTopButtom = () => {
  const [isShowButtom, setIsShowButtom] = useState(false);

  let windowHeight = window.innerHeight;

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > windowHeight / 2) {
        setIsShowButtom(true);
      } else {
        setIsShowButtom(false);
      }
    }, 250);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowHeight]);

  const handleScrollTo = () => {
    const scrollToTop = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
      }
    };
    scrollToTop();
  };

  return (
    <>
      {isShowButtom && (
        <button className={scss.button} onClick={handleScrollTo}>
          <svg className={scss.icon} width={23} height={43}>
            <use href={`${icons}#arrow-top`}></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollTopButtom;
