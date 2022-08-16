import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuItems } from './LayoutInner.const';
import LogoutButton from '../LogoutButton';



const { Header, Content, Footer } = Layout;

const LayoutInner = ({ content }) => {
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
        <LogoutButton />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {content}
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

LayoutInner.propTypes = {
  content: PropTypes.any,
};

LayoutInner.defaultProps = {
  content: 'content',
};

export default LayoutInner;
