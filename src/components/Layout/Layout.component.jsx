import React from 'react';

import { Header } from '../Header/header.component';
import { Footer } from '../Footer/footer.component';

import '../../assets/styles/global.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
