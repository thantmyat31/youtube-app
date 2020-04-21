/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import YouTubeComponent from './components/youtube.component';
import ChannelHeader from './components/channelHeader.component';

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.channelContainer}>
        <ChannelHeader />
      </View>
      <Text style={{fontSize: 30}}>To add React Native Navigation V5</Text>
      <Button
        title="take image"
        color="#888"
        onPress={() => setPlayVideo(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#28343D',
  },
  channelContainer: {
    width: '100%',
  },
});

export default App;
