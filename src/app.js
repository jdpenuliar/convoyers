import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Haha from './components/sample';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>
          convoyers
        </Text>
        <Haha />
      </View>
    </Provider>

  );
};

export default App;
