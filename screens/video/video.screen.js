import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ThemeWrapper from '../../components/themeWrapper.component';
import { getVideo } from '../../services/video.service';
import Color from './../../constants/color.constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YouTubeComponent from './../../components/youtube.component';

const VideoDetailsScreen = ({ route }) => {
	const videoId = route.params.videoId;
	const video = getVideo(videoId);
	const [ isPlayed, setIsPlayed ] = useState(false);

	const handleOnPerss = () => {
		setIsPlayed(true);
	};

	return (
		<ThemeWrapper style={styles.screen}>
			<TouchableOpacity activeOpacity={0.6} style={styles.imageContainer} onPress={handleOnPerss}>
				{!isPlayed ? (
					<ImageBackground source={{ uri: video.imageUrl }} style={styles.image}>
						<View style={styles.playWrapper}>
							<Ionicons name="md-play" style={styles.play} size={40} color={Color.primary} />
						</View>
					</ImageBackground>
				) : (
					<YouTubeComponent videoId={video.videoId} />
				)}
			</TouchableOpacity>
			<ScrollView style={styles.view}>
				<View style={styles.details}>
					<Text style={styles.title}>{video.title}</Text>
					<View style={styles.dateContainer}>
						<Ionicons name="md-calendar" size={25} color="#ffffff" />
						<Text style={styles.date}>{video.date}</Text>
					</View>
					<Text style={styles.content}>{video.content}</Text>
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
		letterSpacing: 1
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
		letterSpacing: 1
	},
	content: {
		color: '#ffffff',
		marginTop: 20,
		lineHeight: 25
	}
});

export default VideoDetailsScreen;
