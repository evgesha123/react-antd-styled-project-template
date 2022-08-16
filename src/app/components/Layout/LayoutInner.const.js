import { Menu } from 'antd';
import React from 'react';
import LogoutButton from '../LogoutButton';
import urlPageUsers from '../../../urls/urlPageUsers';
import urlPageDashboard from '../../../urls/urlPageDashboard';



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
      <LogoutButton />
    </Menu.Item>
  </Menu>
);
