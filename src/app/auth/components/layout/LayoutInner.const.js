import urlPageDashboard from '../../../../urls/urlPageDashboard';
import urlPageUsers from '../../../../urls/urlPageUsers';



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
