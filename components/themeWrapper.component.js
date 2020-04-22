import React from 'react';
import {StyleSheet, View} from 'react-native';
import Color from './../constants/color.constants';

const ThemeWrapper = ({children}) => {
  return <View style={styles.theme}>{children}</View>;
};

const styles = StyleSheet.create({
  theme: {
    flex: 1,
    padding: 10,
    backgroundColor: Color.secondary,
  },
});

export default ThemeWrapper;
