import React, { ReactNode } from 'react'

import Menu from './menu'
import Footer from './footer'

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) =>
  <>
    <Menu />
    {children}
    <Footer />
  </>

export default Layout