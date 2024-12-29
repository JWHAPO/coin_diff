/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './modules/redux/Store';
import React from 'react';

const ReduxApp = () => (
  <Provider store={Store}>
    <PersistGate persistor={Persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
