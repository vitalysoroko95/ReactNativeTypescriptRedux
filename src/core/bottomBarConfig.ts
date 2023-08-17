import screens from '../screens';
import icons from './icons';

export default {
  Home: {
    screenName: 'List',
    component: screens.Home,
    icon: icons.users,
    size: 24,
  },
  Details: {
    screenName: 'List Item',
    component: screens.Details,
    icon: icons.user,
    size: 24,
  },
};
