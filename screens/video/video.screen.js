import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import Color from './../../constants/color.constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YouTubeComponent from './../../components/youtube.component';
import { connect } from 'react-redux';

const VideoDetailsScreen = ({ route, videos, navigation }) => {
	const videoId = route.params.videoId;
	const videoType = route.params.videoType;
	const [ isPlayed, setIsPlayed ] = useState(false);
	const [ fullScreen, setFullScreen ] = useState(false);

	const isFullScreenMode = (value) => {
		setFullScreen(value);
	};

	const getCurrentVideo = (videoId, videoType) => {
		let video;
		if (videoType.toLowerCase() === 'news') {
			video = videos.news.videos.find((v) => v.id === videoId);
		}
		if (videoType.toLowerCase() === 'knowledge') {
			video = videos.knowledge.videos.find((v) => v.id === videoId);
		}
		if (videoType.toLowerCase() === 'entertain') {
			video = videos.entertain.videos.find((v) => v.id === videoId);
		}
		return video;
	};

	const currentVideo = getCurrentVideo(videoId, videoType);
	const title = currentVideo.snippet.title;
	const date = currentVideo.snippet.publishedAt.split('T').shift();
	const description = currentVideo.snippet.description;
	const imageUrl = currentVideo.snippet.thumbnails.default.url;
	const videoUrl = currentVideo.snippet.resourceId.videoId;

	const handleOnPerss = () => {
		setIsPlayed(true);
	};

	navigation.setOptions({
		headerRight: () =>
			isPlayed ? (
				<TouchableOpacity activeOpacity={0.6} style={styles.headerButton} onPress={() => setFullScreen(true)}>
					<Ionicons name="md-expand" color="#ffffff" size={35} onPress={() => setFullScreen(true)} />
				</TouchableOpacity>
			) : null
	});

	return (
		<ThemeWrapper style={styles.screen}>
			<TouchableOpacity activeOpacity={0.6} style={styles.imageContainer} onPress={handleOnPerss}>
				{!isPlayed ? (
					<ImageBackground source={{ uri: imageUrl }} style={styles.image}>
						<View style={styles.playWrapper}>
							<Ionicons name="md-play" style={styles.play} size={40} color={Color.primary} />
						</View>
					</ImageBackground>
				) : (
					<YouTubeComponent videoId={videoUrl} isFullScreenMode={isFullScreenMode} fullScreen={fullScreen} />
				)}
			</TouchableOpacity>
			<ScrollView style={styles.view}>
				<View style={styles.details}>
					<Text style={styles.title}>{title}</Text>
					<View style={styles.dateContainer}>
						<Ionicons name="md-calendar" size={25} color="#ffffff" />
						<Text style={styles.date}>{date}</Text>
					</View>
					<Text style={styles.content}>{description}</Text>
				</View>
			</ScrollView>
		</ThemeWrapper>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 0
	},
	view: {
		width: '100%',
		height: '100%'
	},
	headerButton: {
		marginRight: 10,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: '100%',
		height: 300,
		backgroundColor: Color.primary,
		elevation: 5
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	playWrapper: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: 'rgba(255,255,255,0.7)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	play: {
		marginLeft: 6
	},
	details: {
		paddingHorizontal: 10,
		paddingVertical: 25
	},
	title: {
		fontSize: 22,
		color: '#ffffff',
		letterSpacing: 1,
		fontFamily: 'Padauk-Regular'
	},
	dateContainer: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	date: {
		fontSize: 12,
		color: '#ddd',
		paddingLeft: 10,
		letterSpacing: 1,
		fontFamily: 'Padauk-Regular'
	},
	content: {
		color: '#ffffff',
		marginTop: 20,
		lineHeight: 25,
		fontFamily: 'Padauk-Regular'
	}
});

const mapStateToProps = (state) => ({
	videos: state.video
});

export default connect(mapStateToProps)(VideoDetailsScreen);
