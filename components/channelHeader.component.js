import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

const ChannelHeader = () => {
  return (
    <ImageBackground
      source={{uri: 'https://wallpaperaccess.com/full/329583.jpg'}}
      style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Channel Name</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 15,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    textTransform: 'uppercase',
  },
});

export default ChannelHeader;
