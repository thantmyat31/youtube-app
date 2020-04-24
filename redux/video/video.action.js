import videoActionTypes from './video.type';
import axios from 'axios';
import API from './../../api/private.api';

export const startRequestNews = () => ({
	type: videoActionTypes.START_REQUEST_NEWS
});

export const successRequestNews = (playList) => ({
	type: videoActionTypes.SUCCESS_REQUEST_NEWS,
	payload: playList
});

export const failureRequestNews = (error) => ({
	type: videoActionTypes.FAILURE_REQUEST_NEWS,
	payload: error
});

export const getNewsVideos = () => {
	return (dispatch) => {
		dispatch(startRequestNews());
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${API.NEWS_PLAYLIST_ID}&key=${API.YOUTUBE_API}&part=snippet&maxResults=50`
			)
			.then((response) => {
				dispatch(successRequestNews(response.data.items));
			})
			.catch((error) => {
				dispatch(failureRequestNews(error.message));
			});
	};
};

export const startRequestKnowledge = () => ({
	type: videoActionTypes.START_REQUEST_KNOWLEDGE
});

export const successRequestKnowledge = (playList) => ({
	type: videoActionTypes.SUCCESS_REQUEST_KNOWLEDGE,
	payload: playList
});

export const failureRequestKnowledge = (error) => ({
	type: videoActionTypes.FAILURE_REQUEST_KNOWLEDGE,
	payload: error
});

export const getKnowledgeVideos = () => {
	return (dispatch) => {
		dispatch(startRequestKnowledge());
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${API.KNOWLEDGE_PLAYLIST_ID}&key=${API.YOUTUBE_API}&part=snippet&maxResults=50`
			)
			.then((response) => {
				dispatch(successRequestKnowledge(response.data.items));
			})
			.catch((error) => {
				dispatch(failureRequestKnowledge(error.message));
			});
	};
};

export const startRequestEntertain = () => ({
	type: videoActionTypes.START_REQUEST_ENTERTAIN
});

export const successRequestEntertain = (playList) => ({
	type: videoActionTypes.SUCCESS_REQUEST_ENTERTAIN,
	payload: playList
});

export const failureRequestEntertain = (error) => ({
	type: videoActionTypes.FAILURE_REQUEST_ENTERTAIN,
	payload: error
});

export const getEntertainVideos = () => {
	return (dispatch) => {
		dispatch(startRequestEntertain());
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${API.ENTERTAIN_PLAYLIST_ID}&key=${API.YOUTUBE_API}&part=snippet&maxResults=50`
			)
			.then((response) => {
				dispatch(successRequestEntertain(response.data.items));
			})
			.catch((error) => {
				dispatch(failureRequestEntertain(error.message));
			});
	};
};
