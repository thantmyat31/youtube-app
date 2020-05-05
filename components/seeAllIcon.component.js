import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SeeAllIcon = ({ onPress }) => {
	return (
		<View style={styles.iconContainer}>
			<Text style={styles.latest}>Latest Post</Text>
			<TouchableOpacity activeOpacity={0.6} style={{}} onPress={onPress}>
				<View style={styles.icon}>
					<Text style={styles.seeAll}>See All</Text>
					<Ionicons name="md-apps" size={30} color="#ffffff" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10
	},
	icon: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	latest: {
		color: '#ffffff',
		fontSize: 18
	},
	seeAll: {
		color: '#ffffff',
		paddingRight: 10,
		fontSize: 14
	}
});

export default SeeAllIcon;
