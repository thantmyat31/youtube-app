import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import ListItem from './listItem.component';
import { getNewsVideos, getKnowledgeVideos, getEntertainVideos } from '../redux/video/video.action';
import { connect } from 'react-redux';

const VideosList = ({
	navigation,
	data,
	videoType,
	getVideos,
	getNewsVideos,
	getKnowledgeVideos,
	getEntertainVideos
}) => {
	const [ isRefresh, setIsRefresh ] = useState(false);
	const [ videos, setVideos ] = useState();

	const handleOnNavigate = (videoId) => {
		navigation.navigate('VideoDetails', {
			videoId: videoId,
			videoType: videoType
		});
	};

	useEffect(
		() => {
			if (isRefresh && videos) {
				setIsRefresh(false);
			}
		},
		[ isRefresh ]
	);

	const handleOnRefresh = () => {
		setIsRefresh(true);
		if (videoType.toLowerCase() === 'news') {
			getNewsVideos();
			setVideos(getVideos.news.videos);
		}
		if (videoType.toLowerCase() === 'knowledge') {
			getKnowledgeVideos();
			setVideos(getVideos.knowledge.videos);
		}
		if (videoType.toLowerCase() === 'entertain') {
			getEntertainVideos();
			setVideos(getVideos.entertain.videos);
		}
	};

	return (
		<FlatList
			style={styles.list}
			keyExtractor={(item, index) => item.id}
			data={videos ? videos : data}
			renderItem={(video) =>
				video.item.snippet.title.toLowerCase() !== 'private video' ? (
					<ListItem video={video.item} onPress={() => handleOnNavigate(video.item.id)} />
				) : null}
			refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={handleOnRefresh} />}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		width: '100%'
	}
});

const mapStateToProps = (state) => ({
	getVideos: state.video
});

const mapDispatchToProps = (dispatch) => ({
	getNewsVideos: () => dispatch(getNewsVideos()),
	getKnowledgeVideos: () => dispatch(getKnowledgeVideos()),
	getEntertainVideos: () => dispatch(getEntertainVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
