import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

type MainLayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: React.PropsWithChildren<MainLayoutProps>) => (
  <>
    <Header />
    {children}
    <Footer/>
  </>
)

export default Layout;