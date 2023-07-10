import React from 'react';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';

import store from './src/stores';

function App(): JSX.Element {
  console.log('meong');

  return (
    <Provider store={store}>
      <View>
        <Text>Test</Text>
      </View>
    </Provider>
  );
}

export default App;
