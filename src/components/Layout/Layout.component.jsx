import React from 'react';

import { Header } from '../Header/header.component';

import '../../assets/styles/global.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
