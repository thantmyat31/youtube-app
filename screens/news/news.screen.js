import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import VideosList from '../../components/videosList.component';
import { connect } from 'react-redux';
import { getNewsVideos } from '../../redux/video/video.action';

const NewsScreen = ({ navigation, route, newsVideos, getNewsVideos }) => {
	const currentRoute = route.name;

	useEffect(() => {
		getNewsVideos();
	}, []);

	return (
		<ThemeWrapper>
			<View style={styles.screen}>
				{newsVideos && <VideosList data={newsVideos} navigation={navigation} videoType={currentRoute} />}
			</View>
		</ThemeWrapper>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

const mapStateToProps = (state) => ({
	newsVideos: state.video.news.videos
});

const mapDispatchToProps = (dispatch) => ({
	getNewsVideos: () => dispatch(getNewsVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
