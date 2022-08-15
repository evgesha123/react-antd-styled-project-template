import React, { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import isEmpty from 'lodash/isEmpty';
import { Layout, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { MenuItems } from './LayoutInner.const';
import LogoutHooks from '../logout';



const { Header, Content, Footer } = Layout;

const LayoutInner = () => {
  const [ isDarkMode, setIsDarkMode ] = useState();
  const { switcher, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    localStorage.setItem('theme', isChecked ? 'dark' : 'light');
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme='dark'
          mode="horizontal"
          defaultSelectedKeys={[ 'dashboard' ]}
        >
          {!isEmpty(MenuItems) && MenuItems.map((item) => {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.navLink}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>

        <Switch
          style={{ marginRight: 6 }}
          key={2}
          checked={isDarkMode || localStorage.getItem('theme') === 'dark'}
          onChange={toggleTheme}
          // checkedChildren="Dark"
          // unCheckedChildren="Light"
        />
        <LogoutHooks />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        Content
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
