import React from 'react';
import { SolutionOutlined ,FieldTimeOutlined,GlobalOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Link, Route,Routes, useLocation} from "react-router-dom"
import Education from './Resume/Education'
import Work from './Resume/Work'
import Language from './Resume/Language'

const { Header, Content, Sider } = Layout;


  const items1 = [
    { 
        key:'',
        label: 'Resume',
    },
    {
        key:'Education',
        label: <Link to={'/education'}>Education</Link>,
        icon: <SolutionOutlined/>,
    },
    {
        key:'Work',
        label: <Link to={'/work'}>Work</Link>,
        icon: <FieldTimeOutlined/>,
      
    },
    {
        key:'Language',
        label:  <Link to={'/language'}>Language</Link>,
        icon: <GlobalOutlined/>,

    },
  ]

const Resume = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div  id="resume" class="section">

    <div class="container">

        <div class="row">

            <div class="heading">
                <h2>RESUME</h2>
            </div>
      <Layout style={{minHeight:"520px"}}>
           
      <Layout>
        <Sider
          width={200}
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            background: colorBgContainer,
          }}
        >
         <div className="logo" />
          <Menu
            mode="inline"
            defaultSelectedKeys={['Education']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items1}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,            }}
          >
             <Routes>
                <Route path='/education' element={<Education/>} exact/>
                <Route path='/work' element={<Work/>} exact/>
                <Route path='/language' element={<Language/>} exact/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>

           


        </div>

    </div>

</div>
    
  );
};
export default Resume;