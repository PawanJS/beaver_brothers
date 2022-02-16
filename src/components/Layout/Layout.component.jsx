import React from 'react';

import { Navbar } from '../Header/Navbar/navbar.component';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
