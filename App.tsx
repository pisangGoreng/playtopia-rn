import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import store, {persistor} from './src/stores';
import BottomTabs from './src/navigations/BottomTabs';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
