import {
  CommonNavigationAction,
  StackActionType,
} from '@react-navigation/native';

export type Navigation = {
  navigate: (scene: string, params?: object) => void;
  goBack: () => void;
  replace: (stack: string) => void;
  getState: () => void;
  dispatch: (action: CommonNavigationAction | StackActionType) => void;
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Icons {
  users: string;
  arrowRight: string;
  search: string;
  user: string;
}
