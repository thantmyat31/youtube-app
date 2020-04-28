import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from './../navigation/app.navigation';

import ChannelHeader from './../components/channelHeader.component';
import Color from './../constants/color.constants';

const LandingScreen = () => {
	return (
		<View style={styles.screen}>
			<View style={styles.channelContainer}>
				<ChannelHeader />
				<TabNavigator />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Color.primary
	},
	channelContainer: {
		width: '100%',
		height: '100%'
	}
});

export default LandingScreen;
