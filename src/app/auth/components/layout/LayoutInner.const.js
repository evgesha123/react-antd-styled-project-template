import { Menu } from 'antd';
import React from 'react';
import urlPageDashboard from '../../../../urls/urlPageDashboard';
import urlPageUsers from '../../../../urls/urlPageUsers';
import LogoutHook from '../logout';



export const MenuItems = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    navLink: urlPageDashboard(),
    icon: '',
  },
  {
    label: 'Users',
    key: 'users',
    navLink: urlPageUsers(),
    icon: '',
  },
];

export const dropdownOverlay = () => (
  <Menu theme="light">
    <Menu.Item key='logout'>
      <LogoutHook />
    </Menu.Item>
  </Menu>
);
