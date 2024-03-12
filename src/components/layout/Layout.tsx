import { Suspense, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from '../../context/Context';
import { throttle } from 'lodash';

import Header from '../header';
import Footer from '../footer';
import scss from './Layout.module.scss';
import ScrollTopButtom from '../scrollTopButtom';
import MobileMenu from '../mobileMenu';

const Layout = () => {
  const { setIsOpenMobMenu } = useContext(Context);

  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth > 1023) {
        setIsOpenMobMenu(false);
      }
    }, 250);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsOpenMobMenu]);

  return (
    <div className={scss.wrapper}>
      <Header />
      <main className={scss.main}>
        <div className={scss.container}>
          <Suspense fallback="Loader">
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <ScrollTopButtom />
      <MobileMenu />
    </div>
  );
};

export default Layout;
