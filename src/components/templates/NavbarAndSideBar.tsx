import React from 'react';
import { Layout } from 'antd';
import { Navbar, Sidebar } from '../organisms';

export function NavbarAndSideBar() {
 return (
    <Layout>
        <Navbar/>
        <Sidebar/>
    </Layout>
  )
}
