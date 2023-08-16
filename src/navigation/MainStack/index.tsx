import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyBottomNavigation, TabBarIcon } from './../../components';
import bottomBarConfig from '../../core/bottomBarConfig';
import { theme } from '../../core/theme';

export type MainStackParams = {
  Home: undefined;
  Details: undefined;
};

const BottomTab = createBottomTabNavigator<MainStackParams>();

const MainStackScreens = (): JSX.Element => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={props => <MyBottomNavigation {...props} />}>
    {Object.values(bottomBarConfig).map(bottomBar => (
      <BottomTab.Screen
        key={bottomBar.screenName}
        component={bottomBar.component}
        name={bottomBar.screenName as any}
        options={{
          tabBarLabel: bottomBar.screenName,
          tabBarIcon: props => <TabBarIcon name={bottomBar.icon} {...props} />,
          tabBarStyle: {
            width: 100,
            backgroundColor: theme.colors.scrim,
          },
        }}
      />
    ))}
  </BottomTab.Navigator>
);

export default MainStackScreens;
