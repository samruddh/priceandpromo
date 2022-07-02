import React from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

export function Sidebar() {

    const { Sider } = Layout;

    let submenu = [
        {key:"0", icon:React.createElement(UserOutlined), label:`Strategic Pricing`, children:[{key:0,label:'Strategy'},{key:1,label:'Opportunity'},{key:2,label:'Simulator'},{key:3,label:'Scenario Planner'}]},
        {key:"1", icon:React.createElement(UserOutlined), label:`Price Monitoring`,children:[{key:0,label:'Option'}]},
        {key:"2", icon:React.createElement(UserOutlined), label:`Trade Promotions`,children:[{key:0,label:'Options'}]},
    ];

  return (
    <Layout>
        <Sider width={200} className="site-layout-background">
          <div className='bg-white h-16 flex items-center justify-start text-xl pl-4 border border-slate-400'>
            <SearchOutlined/>
            <a className='ml-2'>Global Filter</a>
          </div>
          <div className='bg-white h-14'>
          <h2 className='text-center pt-4'><span className='bg-white'>Dynamic Promotions AI</span></h2>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['Strategic Pricing']}
            style={{ height: '100%', borderLeft: 0 }}
            items={submenu}
          />
        </Sider>
    </Layout>
  )
}
