/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChannelHeader from './components/channelHeader.component';

import 'react-native-gesture-handler';
import MainNavigator from './navigation/app.navigation';
import Color from './constants/color.constants';

const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.channelContainer}>
        <ChannelHeader />
        <MainNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  channelContainer: {
    width: '100%',
    height: '100%',
  },
});

export default App;
