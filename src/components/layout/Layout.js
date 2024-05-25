import { Suspense, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from '../../context/Context';
import { throttle } from 'lodash';
import Header from '../header';
import Footer from '../footer';
import ScrollTopButton from '../scrollTopButton';
import MobileMenu from '../mobileMenu';
import styles from './Layout.module.scss';

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
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollTopButton />
      <MobileMenu />
    </div>
  );
};

export default Layout;
