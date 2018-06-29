/**
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigator from './src/navigators/AppNavigator';
import configureStore from './src/store/configureStore';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} onBeforeLift={onBeforeLift} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
