import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Avatar, Col, Dropdown, Image, Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dropdownOverlay, MenuItems } from './LayoutInner.const';



const { Header, Content, Footer } = Layout;


const LayoutInner = ({ content }) => {
  const { pathname } = useLocation();
  const userData = JSON.parse(localStorage.getItem('auth'));

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme='dark'
          mode="horizontal"
          selectedKeys={[ pathname.substring(1) ]}
        >
          {!isEmpty(MenuItems) && MenuItems.map((item) => {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.navLink}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>

        <Col>
          <Dropdown overlay={dropdownOverlay} placement="bottomLeft">
            <Col className="da-d-flex-center" onClick={(ev) => ev.preventDefault()}>
              <Avatar
                className='pointer'
                size={40}
                src={
                  <Image
                    referrerPolicy="no-referrer"
                    src={userData.profileObj.imageUrl || null}
                    style={{ width: 40, height: 40 }}
                    preview={false}
                  />
                }
              />
            </Col>
          </Dropdown>
        </Col>
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
