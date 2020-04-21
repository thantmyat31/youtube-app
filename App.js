/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import YouTube from 'react-native-youtube';
import API from './api/private.api';

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState();
  const [quality, setQuality] = useState();
  const [error, setError] = useState();

  return (
    <View style={styles.screen}>
      <View style={styles.youtubeContainer}>
        <YouTube
          apiKey={API.YOUTUBE_API}
          videoId="7wrGoXczHq4" // The YouTube video ID
          play // control playback of video with true/false
          //fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => setIsReady(true)}
          onChangeState={e => setStatus(e.state)}
          onChangeQuality={e => setQuality(e.quality)}
          onError={e => setError(e.error)}
          style={{width: '100%', height: 300}}
        />
      </View>

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
  },
  youtubeContainer: {
    width: '100%',
    padding: 10,
  },
});

export default App;
