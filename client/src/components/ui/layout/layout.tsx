import { PropsWithChildren } from 'react';

import classes from './layout.module.scss';

import { Navbar } from './navbar';
import { Footer } from './footer';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={`container ${classes.container}`}>{children}</main>
      <Footer />
    </>
  );
};
