import React from 'react'
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logo from "../src/assets/images/samyaLogo.png";

export default function Home() {

  const { Sider } = Layout;
  
  let submenu = [
    {key:"0", icon:React.createElement(UserOutlined), label:`Strategic Pricing`, children:[{key:0,label:'Strategy'},{key:1,label:'Opportunity'},{key:2,label:'Simulator'},{key:3,label:'Scenario Planner'}]},
    {key:"1", icon:React.createElement(UserOutlined), label:`Price Monitoring`,children:[{key:0,label:'Option'}]},
    {key:"2", icon:React.createElement(UserOutlined), label:`Trade Promotions`,children:[{key:0,label:'Options'}]},
]

  return (
    <Layout className='h-screen'>
      <nav className='h-16 bg-white flex'>
        <div className='border border-slate-400'>
          <span className='w-8 h-16'>
            <img src={logo} alt="logo"/>
          </span>
        </div>
        <div className='flex items-center justify-between w-full border border-slate-400'>
          <div className='font-medium text-4xl text-sky-800 m-3'>Mars</div>
          <div className='flex justify-center m-3'>
            <a className='bg-sky-300 w-10 h-10 rounded-full flex text-xl justify-center items-center text-black'>Js</a>
          </div>
        </div>
      </nav>
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
    </Layout>
  )
}