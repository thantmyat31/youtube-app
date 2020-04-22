import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import {getVideo} from '../../services/video.service';
import Color from './../../constants/color.constants';

const VideoDetailsScreen = ({route}) => {
  const videoId = route.params.videoId;
  const video = getVideo(videoId);

  const handleOnPerss = () => {
    console.log('played');
  };

  return (
    <ThemeWrapper style={styles.screen}>
      <ScrollView style={styles.view}>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.imageContainer}
            onPress={handleOnPerss}>
            <Image source={{uri: video.imageUrl}} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.details}>
            <Text style={styles.title}>{video.title}</Text>
          </View>
        </View>
      </ScrollView>
    </ThemeWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 0,
  },
  view: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: Color.primary,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: '#ffffff',
  },
});

export default VideoDetailsScreen;
