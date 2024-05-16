import { Layout } from 'antd'
import { useState } from 'react'
import Logo from './components/Logo';
import MenuList from './components/Menulist';

const { Header, Sider }  = Layout;
function App() {
  return (
    <>
    <Layout>
      <Sider className = "sidebar">sidebar
      <Logo/>
      <MenuList/>
      </Sider>
    </Layout>

    </>
  )
}

export default App
