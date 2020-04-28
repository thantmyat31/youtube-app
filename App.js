/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './navigation/app.navigation';
import {Provider} from 'react-redux';
import store from './redux/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
