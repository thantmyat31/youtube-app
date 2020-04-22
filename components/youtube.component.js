import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';
import API from '../api/private.api';

const YouTubeComponent = ({ videoId }) => {
	const [ isReady, setIsReady ] = useState(false);
	const [ status, setStatus ] = useState();
	const [ quality, setQuality ] = useState();
	const [ error, setError ] = useState();

	return (
		<YouTube
			apiKey={API.YOUTUBE_API}
			videoId={videoId} // The YouTube video ID
			play // control playback of video with true/false
			//fullscreen // control whether the video should play in fullscreen or inline
			loop // control whether the video should loop when ended
			onReady={(e) => setIsReady(true)}
			onChangeState={(e) => setStatus(e.state)}
			onChangeQuality={(e) => setQuality(e.quality)}
			onError={(e) => setError(e.error)}
			style={styles.youtube}
		/>
	);
};

const styles = StyleSheet.create({
	youtube: { width: '100%', height: 300 }
});

export default YouTubeComponent;
