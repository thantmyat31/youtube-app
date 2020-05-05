import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import VideosList from '../../components/videosList.component';
import { connect } from 'react-redux';
import { getNewsVideos } from '../../redux/video/video.action';
import SeeAllIcon from '../../components/seeAllIcon.component';

const NewsScreen = ({ navigation, route, newsVideos, getNewsVideos }) => {
	const currentRoute = route.name;
	const playList = newsVideos.filter((vid, index) => index < 5);

	useEffect(() => {
		getNewsVideos();
	}, []);

	const handleOnNavigate = () => {
		navigation.navigate('AllVideos', { label: 'News', title: 'News' });
	};

	return (
		<ThemeWrapper>
			<View style={styles.screen}>
				<SeeAllIcon onPress={handleOnNavigate} />
				{newsVideos && (
					<VideosList tabView={true} data={playList} navigation={navigation} videoType={currentRoute} />
				)}
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
