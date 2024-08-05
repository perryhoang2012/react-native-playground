/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Text, TextInput} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from '@redux/configureStore';

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: true,
  maxFontSizeMultiplier: 1,
};

TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: true,
  maxFontSizeMultiplier: 1,
};

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
