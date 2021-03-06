import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ video, onPress }) => {
	const title = video.snippet.title.length > 70 ? `${video.snippet.title.substring(0, 70)} ...` : video.snippet.title;

	const imageUrl = video.snippet.thumbnails
		? video.snippet.thumbnails.default.url
		: 'https://wallpapercave.com/wp/wp2537078.jpg';

	return (
		<TouchableOpacity style={styles.listContainer} activeOpacity={0.6} onPress={onPress}>
			<View style={styles.list}>
				<View style={styles.imageContainer}>
					<Image source={{ uri: imageUrl }} style={styles.image} />
				</View>
				<View style={styles.details}>
					<Text style={styles.title}>{title}</Text>
					<View style={styles.linkContainer}>
						<Text style={styles.link}>Continue watching</Text>
						<Icon name="long-arrow-right" size={16} color="#ffffff" />
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		marginVertical: 10
	},
	list: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 100
	},
	imageContainer: {
		width: '40%',
		height: '100%'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	details: {
		width: '60%',
		height: '100%',
		paddingHorizontal: 10,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#ffffff',
		fontFamily: 'Padauk-Regular'
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10
	},
	link: {
		color: '#ffffff',
		fontSize: 12,
		marginRight: 10,
		fontFamily: 'Padauk-Regular'
	}
});

export default ListItem;
