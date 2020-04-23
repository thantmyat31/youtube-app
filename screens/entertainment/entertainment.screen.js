import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import VideosList from '../../components/videosList.component';
import {getEntertainVideos} from '../../redux/video/video.action';
import {connect} from 'react-redux';

const EntertainmentScreen = ({
  navigation,
  route,
  entertainVideos,
  getEntertainVideos,
}) => {
  const currentRoute = route.name;

  useEffect(() => {
    getEntertainVideos();
  }, []);

  return (
    <ThemeWrapper>
      <View style={styles.screen}>
        {entertainVideos && (
          <VideosList
            data={entertainVideos}
            navigation={navigation}
            videoType={currentRoute}
          />
        )}
      </View>
    </ThemeWrapper>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  entertainVideos: state.video.entertain.videos,
});

const mapDispatchToProps = dispatch => ({
  getEntertainVideos: () => dispatch(getEntertainVideos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntertainmentScreen);
