/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './src/reducers/index';
import Routers from './src/routers/Routers';

const store = createStore(
  appReducers
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Routers />
      </Provider>
    );
  }
}

