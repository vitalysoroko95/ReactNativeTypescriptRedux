/**
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './src/navigation';

import { Provider } from 'react-redux/es/exports';
import { store } from './src/store/index';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
