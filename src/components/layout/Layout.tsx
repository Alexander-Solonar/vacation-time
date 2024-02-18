import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import scss from './Layout.module.scss';

const Layout = () => {
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
    </div>
  );
};

export default Layout;
