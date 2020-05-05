import React, { useState, useEffect } from 'react';
import ThemeWrapper from './../../components/themeWrapper.component';
import Color from './../../constants/color.constants';
import VideosListComponent from '../../components/videosList.component';
import { connect } from 'react-redux';
import { getNewsVideos, getKnowledgeVideos, getEntertainVideos } from '../../redux/video/video.action';

const AllVideosScreen = ({
	navigation,
	route,
	newsVideos,
	knowledgeVideos,
	entertainVideos,
	getNewsVideos,
	getKnowledgeVideos,
	getEntertainVideos
}) => {
	const label = route.params.label;
	const title = route.params.title;
	const [ videos, setVideos ] = useState();

	useEffect(() => {
		getNewsVideos();
		getKnowledgeVideos();
		getEntertainVideos();
		if (label.toLowerCase() === 'news') setVideos(newsVideos);
		if (label.toLowerCase() === 'knowledge') setVideos(knowledgeVideos);
		if (label.toLowerCase() === 'entertain') setVideos(entertainVideos);
	}, []);

	navigation.setOptions({
		headerTitle: `All ${title}`,
		headerStyle: {
			backgroundColor: Color.primary
		},
		headerTintColor: '#ffffff'
	});

	return (
		<ThemeWrapper>
			<VideosListComponent data={videos} navigation={navigation} videoType={label} />
		</ThemeWrapper>
	);
};

const mapStateToProps = (state) => ({
	newsVideos: state.video.news.videos,
	knowledgeVideos: state.video.knowledge.videos,
	entertainVideos: state.video.entertain.videos
});

const mapDispatchToProps = (dispatch) => ({
	getNewsVideos: () => dispatch(getNewsVideos()),
	getKnowledgeVideos: () => dispatch(getKnowledgeVideos()),
	getEntertainVideos: () => dispatch(getEntertainVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllVideosScreen);
