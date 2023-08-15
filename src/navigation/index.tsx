import * as React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStackScreens, { MainStackParams } from './MainStack';

export type RootStackNavigationProp = {
  Main: NavigatorScreenParams<MainStackParams>;
};

function RootNavigation(): JSX.Element {
  const RootStack = createNativeStackNavigator<RootStackNavigationProp>();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen component={MainStackScreens} name="Main" />
    </RootStack.Navigator>
  );
}

export default RootNavigation;
