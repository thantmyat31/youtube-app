import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import VideosList from '../../components/videosList.component';
import {selectedVideos} from '../../services/video.service';

const NewsScreen = ({navigation, route}) => {
  const currentRoute = route.name;
  const videos = selectedVideos(currentRoute);
  return (
    <ThemeWrapper>
      <View style={styles.screen}>
        <VideosList data={videos} navigation={navigation} />
      </View>
    </ThemeWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default NewsScreen;
