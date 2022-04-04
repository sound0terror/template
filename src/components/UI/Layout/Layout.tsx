import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout: FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
