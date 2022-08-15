import React, { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Switch, Breadcrumb } from 'antd';



const { Header, Content, Footer, Sider } = Layout;

const LayoutInner = () => {
  const [ isDarkMode, setIsDarkMode ] = useState();
  const { switcher, currentTheme, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };


  // <Switch
  //   key={2}
  //   checked={isDarkMode}
  //   onChange={toggleTheme}
  //   checkedChildren="Dark"
  //   unCheckedChildren="Light"
  // />
  const items1 = [ '1', '2', '3' ].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  const items2 = [ UserOutlined, LaptopOutlined, NotificationOutlined ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, jjj) => {
        const subKey = index * 4 + jjj + 1;

        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme='dark'
          mode="horizontal"
          defaultSelectedKeys={[ '2' ]}
          items={items1}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a
          href="https://fabros-team.com/"
          target="_blank"
          className="da-badge-text da-text-color-dark-30" rel="noreferrer"
        >
          Fabros LLC ©2022
        </a>
      </Footer>
    </Layout>
  );
};

export default LayoutInner;
