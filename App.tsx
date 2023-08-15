/**
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './src/navigation';

import { Provider } from 'react-redux/es/exports';
import { store } from './src/store/index';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
