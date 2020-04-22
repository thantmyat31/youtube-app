import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import ListItem from './listItem.component';

const VideosList = ({navigation, data}) => {
  const handleOnNavigate = videoId => {
    navigation.navigate('VideoDetails', {videoId: videoId});
  };
  return (
    <FlatList
      style={styles.list}
      keyExtractor={(item, index) => item.id}
      data={data}
      renderItem={video => (
        <ListItem
          video={video.item}
          onPress={() => handleOnNavigate(video.item.id)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export default VideosList;
