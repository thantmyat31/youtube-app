import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import VideosList from '../../components/videosList.component';
import { connect } from 'react-redux';
import { getKnowledgeVideos } from './../../redux/video/video.action';
import SeeAllIcon from '../../components/seeAllIcon.component';

const KnowledgeScreen = ({ navigation, route, knowledgeVideos, getKnowledgeVideos }) => {
	const currentRoute = route.name;
	const playList = knowledgeVideos.filter((vid, index) => index < 5);

	useEffect(() => {
		getKnowledgeVideos();
	}, []);

	const handleOnNavigate = () => {
		navigation.navigate('AllVideos', { label: 'Knowledge', title: 'Knowledge' });
	};

	return (
		<ThemeWrapper>
			<View style={styles.screen}>
				<SeeAllIcon onPress={handleOnNavigate} />
				{knowledgeVideos && (
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
	knowledgeVideos: state.video.knowledge.videos
});

const mapDispatchToProps = (dispatch) => ({
	getKnowledgeVideos: () => dispatch(getKnowledgeVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(KnowledgeScreen);
