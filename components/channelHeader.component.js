import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const ChannelHeader = () => {
	return (
		<ImageBackground source={require('./../assets/images/cover.png')} style={styles.headerContainer}>
			<View style={styles.headerContent}>
				<Text style={styles.headerTitle}>Channel NKE</Text>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerContent: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'flex-end',
		padding: 15
	},
	headerTitle: {
		color: '#ffffff',
		fontSize: 30,
		letterSpacing: 2,
		textTransform: 'uppercase',
		fontFamily: 'Montserrat-Regular'
	}
});

export default ChannelHeader;
