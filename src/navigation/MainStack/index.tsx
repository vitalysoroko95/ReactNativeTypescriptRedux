import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyBottomNavigation } from './../../components';
import bottomBarConfig from '../../core/bottomBarConfig';
import { theme } from '../../core/theme';
import { Image, StyleSheet } from 'react-native';

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
          tabBarIcon: props => (
            <Image source={bottomBar.icon} style={styles.icon} />
          ),
          tabBarStyle: {
            width: 200,
            backgroundColor: theme.colors.scrim,
          },
        }}
      />
    ))}
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default MainStackScreens;
